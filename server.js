 
require("dotenv").config();

const express = require("express");
const session = require("express-session");
const rateLimit = require("express-rate-limit");
const crypto = require("crypto");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
    throw new Error("Missing security settings in .env");
}

app.use(express.json({ limit: "10kb" }));

// ==========================================
// ANALYTICS STORAGE
// ==========================================

const DATA_FILE = path.join(
    __dirname,
    "..",
    "atharbas-quiz-analytics.json"
);

function loadAnalytics() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = JSON.parse(
                fs.readFileSync(DATA_FILE, "utf8")
            );

            return {
                visits: Array.isArray(data.visits) ? data.visits : [],
                quizzes: Array.isArray(data.quizzes) ? data.quizzes : []
            };
        }
    } catch (error) {
        console.error("Analytics read error:", error.message);
    }

    return { visits: [], quizzes: [] };
}

let analytics = loadAnalytics();

function saveAnalytics() {
    try {
        const temporaryFile = DATA_FILE + ".tmp";

        fs.writeFileSync(
            temporaryFile,
            JSON.stringify(analytics, null, 2),
            "utf8"
        );

        fs.renameSync(temporaryFile, DATA_FILE);
    } catch (error) {
        console.error("Analytics save error:", error.message);
    }
}

// ==========================================
// DATE AND VISITOR HELPERS
// ==========================================

function nepalDate() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Kathmandu",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());
}

function anonymousVisitorId(id) {
    if (
        typeof id !== "string" ||
        !/^[a-f0-9-]{36}$/i.test(id)
    ) {
        return null;
    }

    return crypto
        .createHash("sha256")
        .update(id)
        .digest("hex");
}

// ==========================================
// SESSION SECURITY
// ==========================================

app.use(session({
    name: "quiz_admin_session",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 30 * 60 * 1000
    }
}));

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false
});

const trackingLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 120,
    standardHeaders: "draft-8",
    legacyHeaders: false
});

function requireAdmin(req, res, next) {
    if (req.session?.isAdmin === true) {
        return next();
    }

    res.status(401).json({
        message: "Authentication required."
    });
}

// ==========================================
// PRIVATE VISITOR TRACKING
// ==========================================

app.post("/api/track/visit", trackingLimiter, (req, res) => {
    const visitor = anonymousVisitorId(req.body?.visitorId);

    if (!visitor) {
        return res.status(400).json({
            message: "Invalid visitor ID."
        });
    }

    const page =
        typeof req.body?.page === "string"
            ? req.body.page.slice(0, 100)
            : "/";

    analytics.visits.push({
        visitor,
        page,
        date: nepalDate(),
        timestamp: new Date().toISOString()
    });

    if (analytics.visits.length > 20000) {
        analytics.visits = analytics.visits.slice(-20000);
    }

    saveAnalytics();

    res.json({ success: true });
});

// ==========================================
// QUIZ COMPLETION TRACKING
// ==========================================

app.post("/api/track/quiz-complete", trackingLimiter, (req, res) => {
    const visitor = anonymousVisitorId(req.body?.visitorId);

    const { topic, level, score, total } = req.body || {};

    const allowedTopics = [
        "General Knowledge",
        "Science",
        "Mathematics",
        "Programming",
        "Basketball",
        "Football"
    ];

    const allowedLevels = [
        "A Piece of Cake",
        "Getting Trickier",
        "Final Boss"
    ];

    if (
        !visitor ||
        !allowedTopics.includes(topic) ||
        !allowedLevels.includes(level) ||
        !Number.isInteger(score) ||
        !Number.isInteger(total) ||
        total !== 10 ||
        score < 0 ||
        score > total
    ) {
        return res.status(400).json({
            message: "Invalid quiz result."
        });
    }

    analytics.quizzes.push({
        visitor,
        topic,
        level,
        score,
        total,
        percentage: Math.round((score / total) * 100),
        date: nepalDate(),
        timestamp: new Date().toISOString()
    });

    if (analytics.quizzes.length > 20000) {
        analytics.quizzes = analytics.quizzes.slice(-20000);
    }

    saveAnalytics();

    res.json({ success: true });
});

// ==========================================
// ADMIN LOGIN
// ==========================================

app.post("/api/admin/login", loginLimiter, (req, res) => {
    const password = req.body?.password;

    if (typeof password !== "string") {
        return res.status(400).json({
            message: "Password required."
        });
    }

    const submitted = Buffer.from(password);
    const actual = Buffer.from(process.env.ADMIN_PASSWORD);

    const valid =
        submitted.length === actual.length &&
        crypto.timingSafeEqual(submitted, actual);

    if (!valid) {
        return res.status(401).json({
            message: "Incorrect password."
        });
    }

    req.session.regenerate((err) => {
        if (err) {
            return res.status(500).json({
                message: "Session error."
            });
        }

        req.session.isAdmin = true;

        res.json({ success: true });
    });
});

// ==========================================
// CHECK ADMIN SESSION
// ==========================================

app.get("/api/admin/session", (req, res) => {
    res.json({
        authenticated: req.session?.isAdmin === true
    });
});

// ==========================================
// ADMIN LOGOUT
// ==========================================

app.post("/api/admin/logout", requireAdmin, (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("quiz_admin_session");
        res.json({ success: true });
    });
});

// ==========================================
// ADMIN ANALYTICS DASHBOARD
// ==========================================

app.get("/api/admin/dashboard", requireAdmin, (req, res) => {
    const today = nepalDate();

    const todayVisits = analytics.visits.filter(
        visit => visit.date === today
    );

    const uniqueVisitors = new Set(
        analytics.visits.map(visit => visit.visitor)
    ).size;

    const todayUniqueVisitors = new Set(
        todayVisits.map(visit => visit.visitor)
    ).size;

    const totalQuizzes = analytics.quizzes.length;

    const averageScore = totalQuizzes
        ? Math.round(
            analytics.quizzes.reduce(
                (sum, quiz) => sum + quiz.percentage,
                0
            ) / totalQuizzes
        )
        : 0;

    const categoryCounts = {};

    analytics.quizzes.forEach(quiz => {
        categoryCounts[quiz.topic] =
            (categoryCounts[quiz.topic] || 0) + 1;
    });

    const popularCategories = Object.entries(categoryCounts)
        .map(([topic, count]) => ({ topic, count }))
        .sort((a, b) => b.count - a.count);

    const dailyVisits = [];
    const todayUTC = new Date(`${today}T00:00:00Z`);

    for (let i = 6; i >= 0; i--) {
        const date = new Date(todayUTC);
        date.setUTCDate(date.getUTCDate() - i);

        const dateString = date.toISOString().slice(0, 10);

        dailyVisits.push({
            date: dateString,
            visits: analytics.visits.filter(
                visit => visit.date === dateString
            ).length
        });
    }

    const recentActivity = [
        ...analytics.visits.map(visit => ({
            type: "Visit",
            page: visit.page,
            detail: visit.page,
            timestamp: visit.timestamp
        })),
        ...analytics.quizzes.map(quiz => ({
            type: "Quiz Completed",
            detail: `${quiz.topic} • ${quiz.score}/${quiz.total}`,
            timestamp: quiz.timestamp
        }))
    ]
        .sort((a, b) =>
            new Date(b.timestamp) - new Date(a.timestamp)
        )
        .slice(0, 10);

    res.set("Cache-Control", "no-store");

    res.json({
        totalVisitors: analytics.visits.length,
        todayVisitors: todayUniqueVisitors,
        uniqueVisitors,
        quizAttempts: totalQuizzes,
        completedQuizzes: totalQuizzes,
        averageScore,
        popularCategories,
        dailyVisits,
        recentActivity
    });
});

// ==========================================
// ADMIN PAGE
// ==========================================

app.get("/admin.html", (req, res) => {
    res.sendFile(path.join(__dirname, "admin.html"));
});

// ==========================================
// WEBSITE FILES
// ==========================================

app.use(express.static(__dirname, {
    dotfiles: "deny",
    index: "index.html"
}));

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
    console.log(`Quiz server running at http://localhost:${PORT}`);
});
