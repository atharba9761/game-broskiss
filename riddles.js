 
const TOTAL_RIDDLES = 10;

// ==========================================
// RIDDLE DATABASE
// ==========================================

const riddlesBank = {

    Easy: [
        {
            question: "What has hands but cannot clap?",
            options: ["A clock", "A robot", "A statue", "A tree"],
            answer: "A clock",
            hint: "It tells you the time."
        },
        {
            question: "What gets wetter the more it dries?",
            options: ["A towel", "A sponge", "A blanket", "A fan"],
            answer: "A towel",
            hint: "You use it after a shower."
        },
        {
            question: "What has a neck but no head?",
            options: ["A chair", "A bottle", "A table", "A book"],
            answer: "A bottle",
            hint: "You can fill it with water."
        },
        {
            question: "What has many keys but cannot open a lock?",
            options: ["A door", "A keyboard", "A wallet", "A phone"],
            answer: "A keyboard",
            hint: "You use it to type."
        },
        {
            question: "What goes up but never comes down?",
            options: ["A balloon", "Smoke", "Age", "A bird"],
            answer: "Age",
            hint: "Everyone experiences it."
        },
        {
            question: "What has one eye but cannot see?",
            options: ["A needle", "A camera", "A potato", "A storm"],
            answer: "A needle",
            hint: "It is used for sewing."
        },
        {
            question: "What has four legs but cannot walk?",
            options: ["A dog", "A horse", "A table", "A cat"],
            answer: "A table",
            hint: "You can put things on it."
        },
        {
            question: "What can you catch but not throw?",
            options: ["A ball", "A cold", "A fish", "A stone"],
            answer: "A cold",
            hint: "It can make you sneeze."
        },
        {
            question: "What has teeth but cannot bite?",
            options: ["A lion", "A comb", "A shark", "A wolf"],
            answer: "A comb",
            hint: "You use it on your hair."
        },
        {
            question: "What has pages but is not a website?",
            options: ["A television", "A book", "A radio", "A clock"],
            answer: "A book",
            hint: "You read it."
        }
    ],

    Medium: [
        {
            question: "The more you take, the more you leave behind. What are they?",
            options: ["Money", "Footsteps", "Photos", "Books"],
            answer: "Footsteps",
            hint: "Think about walking."
        },
        {
            question: "I speak without a mouth and hear without ears. What am I?",
            options: ["A radio", "An echo", "A speaker", "A telephone"],
            answer: "An echo",
            hint: "You might hear me in a mountain."
        },
        {
            question: "What has cities but no houses, forests but no trees, and rivers but no water?",
            options: ["A painting", "A map", "A dream", "A book"],
            answer: "A map",
            hint: "You use it to find places."
        },
        {
            question: "What can travel around the world while staying in one corner?",
            options: ["A bird", "A stamp", "A cloud", "A clock"],
            answer: "A stamp",
            hint: "You find it on an envelope."
        },
        {
            question: "What disappears as soon as you say its name?",
            options: ["Darkness", "Silence", "Light", "Time"],
            answer: "Silence",
            hint: "It means no sound."
        },
        {
            question: "I have branches but no fruit, trunk, or leaves. What am I?",
            options: ["A bank", "A river", "A mountain", "A road"],
            answer: "A bank",
            hint: "You might keep your money there."
        },
        {
            question: "What has 13 hearts but no other organs?",
            options: ["A human", "A deck of cards", "An octopus", "A robot"],
            answer: "A deck of cards",
            hint: "Think about playing cards."
        },
        {
            question: "What can fill a room but takes up no space?",
            options: ["Water", "Light", "Furniture", "Air"],
            answer: "Light",
            hint: "It comes from a lamp."
        },
        {
            question: "What belongs to you but other people use it more than you do?",
            options: ["Your phone", "Your name", "Your shoes", "Your bag"],
            answer: "Your name",
            hint: "People call you by it."
        },
        {
            question: "What has an end but no beginning?",
            options: ["A circle", "A stick", "A clock", "A wheel"],
            answer: "A stick",
            hint: "Think of the end of a wooden object."
        }
    ],

    Hard: [
        {
            question: "I am always in front of you but cannot be seen. What am I?",
            options: ["The past", "The future", "The wind", "A shadow"],
            answer: "The future",
            hint: "It has not happened yet."
        },
        {
            question: "A man looks at a photograph and says, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the photograph?",
            options: ["His father", "His friend", "His son", "His brother"],
            answer: "His son",
            hint: "The speaker is talking about his own child."
        },
        {
            question: "What number becomes smaller when you turn it upside down?",
            options: ["6", "8", "0", "1"],
            answer: "6",
            hint: "Turn it around."
        },
        {
            question: "I am taken from a mine and shut in a wooden case, from which I am never released, yet I am used by almost everyone. What am I?",
            options: ["Gold", "Graphite", "Iron", "Coal"],
            answer: "Graphite",
            hint: "You write with it inside a pencil."
        },
        {
            question: "What is so fragile that saying its name breaks it?",
            options: ["Glass", "Silence", "Ice", "Paper"],
            answer: "Silence",
            hint: "Making a sound ends it."
        },
        {
            question: "You see a boat filled with people. It has not sunk, but when you look again you don't see a single person. Why?",
            options: ["They jumped out", "They are married", "They went swimming", "The boat is empty"],
            answer: "They are married",
            hint: "The word 'single' has another meaning."
        },
        {
            question: "What occurs once in a minute, twice in a moment, but never in a thousand years?",
            options: ["The letter M", "The letter T", "The number 1", "The letter A"],
            answer: "The letter M",
            hint: "Look at the spelling of the words."
        },
        {
            question: "I have no life, but I can die. What am I?",
            options: ["A battery", "A stone", "A book", "A chair"],
            answer: "A battery",
            hint: "It powers electronic devices."
        },
        {
            question: "What has keys but no locks, space but no room, and you can enter but not go inside?",
            options: ["A house", "A keyboard", "A map", "A car"],
            answer: "A keyboard",
            hint: "You use it with a computer."
        },
        {
            question: "What word is spelled incorrectly in every dictionary?",
            options: ["Dictionary", "Wrong", "Incorrectly", "Spelling"],
            answer: "Incorrectly",
            hint: "The answer is in the question."
        }
    ]
};

// ==========================================
// RIDDLE STATE
// ==========================================

let riddleDifficulty = "Easy";
let currentRiddles = [];
let currentRiddleIndex = 0;
let riddleScore = 0;
let riddleAnswered = false;
let riddleHintUsed = false;

// ==========================================
// SHUFFLE OPTIONS
// ==========================================

function shuffleOptions(options) {

    const shuffled = [...options];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// ==========================================
// NAVIGATION
// ==========================================

function showRiddleScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(screenId);

    if (!screen) {
        console.error("Riddle screen not found:", screenId);
        return;
    }

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// START RIDDLES
// ==========================================

function startRiddles(difficulty) {

    if (!riddlesBank[difficulty]) {
        console.error("Invalid difficulty:", difficulty);
        return;
    }

    riddleDifficulty = difficulty;

    currentRiddles = riddlesBank[difficulty].map(riddle => ({
        ...riddle,
        options: shuffleOptions(riddle.options)
    }));

    currentRiddleIndex = 0;
    riddleScore = 0;
    riddleAnswered = false;

    showRiddleScreen("riddle-game-screen");

    displayRiddle();
}

// ==========================================
// DISPLAY RIDDLE
// ==========================================

function displayRiddle() {

    riddleAnswered = false;
    riddleHintUsed = false;

    const riddle = currentRiddles[currentRiddleIndex];

    document.getElementById("riddle-number").textContent =
        `Riddle ${currentRiddleIndex + 1}/${TOTAL_RIDDLES}`;

    document.getElementById("riddle-score").textContent =
        riddleScore;

    document.getElementById("riddle-question").textContent =
        riddle.question;

    document.getElementById("riddle-feedback").textContent = "";

    document.getElementById("riddle-hint-text").textContent = "";

    document.getElementById("riddle-hint-text").hidden = true;

    document.getElementById("riddle-hint-btn").disabled = false;

    document.getElementById("riddle-next-btn").disabled = true;

    document.getElementById("riddle-progress").style.width =
        `${((currentRiddleIndex + 1) / TOTAL_RIDDLES) * 100}%`;

    const answerArea = document.getElementById("riddle-answer-area");

    answerArea.innerHTML = "";

    riddle.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-btn riddle-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.dataset.answer = option;

        button.addEventListener("click", () => {
            checkRiddleAnswer(option);
        });

        answerArea.appendChild(button);
    });
}

// ==========================================
// CHECK ANSWER
// ==========================================

function normalizeAnswer(value) {

    return value
        .toLowerCase()
        .trim()
        .replace(/[.,!?']/g, "")
        .replace(/\s+/g, " ");
}

function checkRiddleAnswer(userAnswer) {

    if (riddleAnswered) return;

    const riddle = currentRiddles[currentRiddleIndex];

    const correct = normalizeAnswer(userAnswer) ===
        normalizeAnswer(riddle.answer);

    riddleAnswered = true;

    const feedback = document.getElementById("riddle-feedback");

    if (correct) {

        riddleScore++;

        feedback.textContent = "✓ Correct! Great thinking!";
        feedback.style.color = "#00ff88";

    } else {

        feedback.textContent =
            `✗ Incorrect! Answer: ${riddle.answer}`;

        feedback.style.color = "#ff6464";
    }

    document.getElementById("riddle-score").textContent =
        riddleScore;

    const answerArea = document.getElementById("riddle-answer-area");

    answerArea.querySelectorAll("button").forEach(button => {

        button.disabled = true;

        const option = button.dataset.answer;

        if (
            normalizeAnswer(option) ===
            normalizeAnswer(riddle.answer)
        ) {
            button.classList.add("correct");
        } else if (
            normalizeAnswer(option) ===
            normalizeAnswer(userAnswer) && !correct
        ) {
            button.classList.add("incorrect");
        }

    });

    document.getElementById("riddle-hint-btn").disabled = true;

    document.getElementById("riddle-next-btn").disabled = false;

    document.getElementById("riddle-next-btn").textContent =
        currentRiddleIndex === TOTAL_RIDDLES - 1
            ? "See Results →"
            : "Next Riddle →";
}

// ==========================================
// HINT
// ==========================================

function showRiddleHint() {

    if (riddleAnswered || riddleHintUsed) return;

    const riddle = currentRiddles[currentRiddleIndex];

    riddleHintUsed = true;

    document.getElementById("riddle-hint-text").textContent =
        `💡 Hint: ${riddle.hint}`;

    document.getElementById("riddle-hint-text").hidden = false;

    document.getElementById("riddle-hint-btn").disabled = true;
}

// ==========================================
// NEXT RIDDLE
// ==========================================

function nextRiddle() {

    if (!riddleAnswered) return;

    currentRiddleIndex++;

    if (currentRiddleIndex >= TOTAL_RIDDLES) {

        showRiddleResults();

    } else {

        displayRiddle();
    }
}

// ==========================================
// RESULTS
// ==========================================

function showRiddleResults() {

    showRiddleScreen("riddle-result-screen");

    const percentage = Math.round(
        (riddleScore / TOTAL_RIDDLES) * 100
    );

    document.getElementById("riddle-result-score").textContent =
        riddleScore;

    document.getElementById("riddle-result-total").textContent =
        TOTAL_RIDDLES;

    document.getElementById("riddle-result-percentage").textContent =
        `${percentage}%`;

    let message = "";

    if (percentage === 100) {
        message = "🏆 Riddle Master!";
    } else if (percentage >= 80) {
        message = "🔥 Excellent Brainpower!";
    } else if (percentage >= 60) {
        message = "⭐ Great Work!";
    } else if (percentage >= 40) {
        message = "💪 Keep Practicing!";
    } else {
        message = "🚀 Try Again!";
    }

    document.getElementById("riddle-result-message").textContent =
        message;
}

// ==========================================
// BUTTON EVENTS
// ==========================================

document.getElementById("riddle-hint-btn")
    ?.addEventListener("click", showRiddleHint);

document.getElementById("riddle-next-btn")
    ?.addEventListener("click", nextRiddle);

document.getElementById("riddle-play-again")
    ?.addEventListener("click", () => {
        startRiddles(riddleDifficulty);
    });

document.getElementById("riddle-home-btn")
    ?.addEventListener("click", () => {
        showRiddleScreen("riddle-home-screen");
    });

// ==========================================
// INITIALIZE
// ==========================================

console.log("Game Broskiss Riddles loaded successfully!");
