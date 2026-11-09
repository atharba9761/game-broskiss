 
const TOTAL_QUESTIONS = 10;

// ==========================================
// HTML ELEMENTS
// ==========================================

const screens = {
    home: document.getElementById("home-screen"),
    difficulty: document.getElementById("difficulty-screen"),
    quiz: document.getElementById("quiz-screen"),
    result: document.getElementById("result-screen")
};

const topicGrid = document.getElementById("topic-grid");
const difficultyGrid = document.getElementById("difficulty-grid");
const optionsContainer = document.getElementById("options-container");

// ==========================================
// QUIZ DATA
// ==========================================

const questionBank = {
    "General Knowledge": {
        Easy: [
            ["What is the capital of Nepal?", ["Kathmandu", "Pokhara", "Lalitpur", "Biratnagar"], 0],
            ["How many days are in a week?", ["5", "6", "7", "8"], 2],
            ["Which planet do we live on?", ["Mars", "Earth", "Venus", "Jupiter"], 1],
            ["What is the national animal of Nepal?", ["Tiger", "Elephant", "Cow", "Horse"], 2],
            ["How many months are in a year?", ["10", "11", "12", "13"], 2],
            ["Which ocean is the largest?", ["Atlantic", "Indian", "Arctic", "Pacific"], 3],
            ["What is the currency of Nepal?", ["Rupee", "Dollar", "Euro", "Yen"], 0],
            ["Which is the tallest mountain in the world?", ["K2", "Everest", "Kanchenjunga", "Lhotse"], 1],
            ["Which country is famous for the Eiffel Tower?", ["Italy", "France", "Germany", "Spain"], 1],
            ["How many continents are there?", ["5", "6", "7", "8"], 2]
        ],
        Medium: [
            ["Which country has the largest population?", ["USA", "India", "Russia", "Japan"], 1],
            ["What is the capital of Australia?", ["Sydney", "Melbourne", "Canberra", "Perth"], 2],
            ["Which is the smallest continent?", ["Europe", "Australia", "Asia", "Africa"], 1],
            ["Who invented the telephone?", ["Newton", "Bell", "Einstein", "Edison"], 1],
            ["Which country has the maple leaf on its flag?", ["USA", "Canada", "Brazil", "France"], 1],
            ["What is the largest desert?", ["Sahara", "Gobi", "Antarctic Desert", "Arabian"], 2],
            ["Which language has the most native speakers?", ["English", "Spanish", "Mandarin Chinese", "French"], 2],
            ["What is the capital of Bhutan?", ["Thimphu", "Paro", "Punakha", "Dhaka"], 0],
            ["Which year did World War II end?", ["1942", "1945", "1948", "1950"], 1],
            ["Which is the largest island?", ["Madagascar", "Greenland", "Borneo", "New Guinea"], 1]
        ],
        Hard: [
            ["Which treaty established the European Union?", ["Treaty of Rome", "Maastricht Treaty", "Treaty of Paris", "Lisbon Treaty"], 1],
            ["Which country was formerly called Abyssinia?", ["Ethiopia", "Egypt", "Sudan", "Libya"], 0],
            ["What is the deepest known ocean trench?", ["Java Trench", "Tonga Trench", "Mariana Trench", "Puerto Rico Trench"], 2],
            ["Which civilization developed cuneiform writing?", ["Romans", "Sumerians", "Greeks", "Egyptians"], 1],
            ["What is the capital of Kazakhstan?", ["Almaty", "Astana", "Tashkent", "Bishkek"], 1],
            ["Which sea has no coastline?", ["Red Sea", "Sargasso Sea", "Black Sea", "Caspian Sea"], 1],
            ["Which empire built Machu Picchu?", ["Maya", "Aztec", "Inca", "Roman"], 2],
            ["Which is the world's largest landlocked country?", ["Mongolia", "Chad", "Kazakhstan", "Bolivia"], 2],
            ["Which element has atomic number 74?", ["Gold", "Tungsten", "Platinum", "Osmium"], 1],
            ["Which country has the most time zones including overseas territories?", ["Russia", "France", "USA", "China"], 1]
        ]
    },

    Science: {
        Easy: [
            ["What gas do plants absorb?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 1],
            ["What is H2O?", ["Oxygen", "Hydrogen", "Water", "Salt"], 2],
            ["Which organ pumps blood?", ["Lungs", "Brain", "Heart", "Kidney"], 2],
            ["What is the center of an atom called?", ["Electron", "Nucleus", "Proton", "Shell"], 1],
            ["Which planet is known as the Red Planet?", ["Venus", "Mars", "Jupiter", "Saturn"], 1],
            ["What force pulls objects toward Earth?", ["Magnetism", "Friction", "Gravity", "Electricity"], 2],
            ["What is the boiling point of water at sea level?", ["50°C", "75°C", "100°C", "150°C"], 2],
            ["Which vitamin is produced with sunlight exposure?", ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], 3],
            ["What is the chemical symbol for gold?", ["Ag", "Au", "Fe", "Go"], 1],
            ["How many bones are in an adult human body?", ["106", "206", "306", "406"], 1]
        ],
        Medium: [
            ["What is the powerhouse of the cell?", ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"], 1],
            ["Which gas is most abundant in Earth's atmosphere?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"], 2],
            ["What is the speed of light approximately?", ["300,000 km/s", "150,000 km/s", "30,000 km/s", "3,000 km/s"], 0],
            ["Which blood cells fight infections?", ["Red cells", "White cells", "Platelets", "Plasma"], 1],
            ["What is the chemical symbol for sodium?", ["S", "Na", "So", "N"], 1],
            ["Which planet has the most moons currently confirmed?", ["Earth", "Mars", "Saturn", "Mercury"], 2],
            ["What is the SI unit of force?", ["Joule", "Watt", "Newton", "Pascal"], 2],
            ["Which part of the brain controls balance?", ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], 1],
            ["What is the pH of pure water at 25°C?", ["5", "6", "7", "8"], 2],
            ["Which gas is used in balloons to make them float safely?", ["Hydrogen", "Helium", "Oxygen", "Nitrogen"], 1]
        ],
        Hard: [
            ["What is Avogadro's constant approximately?", ["6.022 × 10²³", "3.14 × 10⁸", "9.81 × 10²", "1.602 × 10⁻¹⁹"], 0],
            ["Which particle has a negative charge?", ["Proton", "Neutron", "Electron", "Photon"], 2],
            ["What is the SI unit of electric resistance?", ["Volt", "Ampere", "Ohm", "Watt"], 2],
            ["Which enzyme breaks down starch?", ["Pepsin", "Amylase", "Lipase", "Trypsin"], 1],
            ["What is the atomic number of carbon?", ["4", "6", "8", "12"], 1],
            ["Which law states that pressure and volume are inversely related at constant temperature?", ["Charles's law", "Boyle's law", "Ohm's law", "Newton's law"], 1],
            ["Which layer of Earth is liquid?", ["Crust", "Inner core", "Outer core", "Lithosphere"], 2],
            ["What is the SI unit of frequency?", ["Decibel", "Hertz", "Tesla", "Joule"], 1],
            ["Which scientist proposed the uncertainty principle?", ["Einstein", "Heisenberg", "Bohr", "Newton"], 1],
            ["Which molecule carries genetic information?", ["RNA only", "DNA", "ATP", "Glucose"], 1]
        ]
    },

    Mathematics: {
        Easy: [
            ["What is 12 × 8?", ["86", "96", "106", "108"], 1],
            ["What is the square root of 144?", ["10", "11", "12", "14"], 2],
            ["What is 25% of 200?", ["25", "40", "50", "75"], 2],
            ["What is 15 + 27?", ["32", "42", "52", "45"], 1],
            ["How many sides does a hexagon have?", ["5", "6", "7", "8"], 1],
            ["What is 100 ÷ 4?", ["20", "25", "30", "40"], 1],
            ["What is 9²?", ["18", "72", "81", "99"], 2],
            ["What is 7 × 7?", ["42", "48", "49", "56"], 2],
            ["What is half of 150?", ["50", "65", "75", "85"], 2],
            ["What is 1/2 + 1/2?", ["1/2", "1", "2", "3/2"], 1]
        ],
        Medium: [
            ["Solve: 3x + 5 = 20", ["3", "5", "7", "10"], 1],
            ["What is the area of a circle with radius 7? Use π = 22/7.", ["144", "154", "164", "174"], 1],
            ["What is 15% of 400?", ["40", "50", "60", "70"], 2],
            ["What is the cube of 4?", ["16", "32", "64", "128"], 2],
            ["What is the sum of angles in a triangle?", ["90°", "180°", "270°", "360°"], 1],
            ["What is 2⁵?", ["16", "24", "32", "64"], 2],
            ["What is the LCM of 6 and 8?", ["12", "18", "24", "48"], 2],
            ["What is the mean of 4, 6, 8, 10?", ["6", "7", "8", "9"], 1],
            ["What is the value of 5!?", ["25", "60", "100", "120"], 3],
            ["What is the slope of y = 3x + 2?", ["2", "3", "5", "1"], 1]
        ],
        Hard: [
            ["What is the derivative of x²?", ["x", "2x", "x³", "2"], 1],
            ["What is the value of sin 90°?", ["0", "1", "-1", "0.5"], 1],
            ["What is the sum of the first 10 natural numbers?", ["45", "50", "55", "60"], 2],
            ["What is the determinant of [[1,2],[3,4]]?", ["-2", "2", "10", "0"], 0],
            ["What is log₁₀(1000)?", ["2", "3", "10", "100"], 1],
            ["What is the probability of getting heads twice in two fair coin tosses?", ["1/2", "1/3", "1/4", "3/4"], 2],
            ["What is the integral of 2x dx?", ["x", "x² + C", "2x² + C", "2 + C"], 1],
            ["What is the sum of interior angles of a pentagon?", ["360°", "450°", "540°", "720°"], 2],
            ["What is the value of 0!?", ["0", "1", "Undefined", "10"], 1],
            ["What is the distance between (0,0) and (3,4)?", ["3", "4", "5", "7"], 2]
        ]
    },

    Programming: {
        Easy: [
            ["Which language is used for web page structure?", ["CSS", "HTML", "Python", "SQL"], 1],
            ["What does CSS stand for?", ["Computer Style System", "Cascading Style Sheets", "Creative Style Syntax", "Color Sheet System"], 1],
            ["Which symbol starts a JavaScript single-line comment?", ["//", "#", "<!--", "**"], 0],
            ["Which language is popular for beginners and AI?", ["Python", "HTML", "CSS", "XML"], 0],
            ["Which HTML tag creates a paragraph?", ["<h1>", "<p>", "<div>", "<img>"], 1],
            ["Which keyword declares a variable in JavaScript?", ["print", "let", "echo", "def"], 1],
            ["What does CPU stand for?", ["Central Processing Unit", "Computer Power Unit", "Control Program Utility", "Central Print Unit"], 0],
            ["Which file extension is used for JavaScript?", [".py", ".css", ".js", ".html"], 2],
            ["Which command prints text in Python?", ["echo()", "print()", "show()", "write()"], 1],
            ["What does HTML stand for?", ["HyperText Markup Language", "HighText Machine Language", "HyperTool Markup Link", "Home Tool Markup Language"], 0]
        ],
        Medium: [
            ["Which data structure follows FIFO?", ["Stack", "Queue", "Tree", "Graph"], 1],
            ["What does API stand for?", ["Application Programming Interface", "Advanced Program Internet", "Application Process Integration", "Automated Program Instruction"], 0],
            ["Which keyword defines a function in Python?", ["function", "func", "def", "define"], 2],
            ["What does JSON stand for?", ["JavaScript Object Notation", "Java Standard Object Network", "Java Source Open Network", "Joint Script Object Name"], 0],
            ["Which operator checks strict equality in JavaScript?", ["=", "==", "===", "!="], 2],
            ["Which Git command downloads a repository?", ["git push", "git clone", "git commit", "git merge"], 1],
            ["What is the output of len('hello') in Python?", ["4", "5", "6", "7"], 1],
            ["Which protocol is used to transfer web pages securely?", ["HTTP", "FTP", "HTTPS", "SMTP"], 2],
            ["What does SQL manage?", ["Databases", "Images", "Operating systems", "Networks"], 0],
            ["Which loop runs while a condition is true?", ["for", "while", "switch", "try"], 1]
        ],
        Hard: [
            ["What is the average time complexity of hash table lookup?", ["O(n)", "O(log n)", "O(1)", "O(n²)"], 2],
            ["Which algorithm finds the shortest paths with non-negative edge weights?", ["Bubble Sort", "Dijkstra's algorithm", "Binary Search", "DFS"], 1],
            ["What does ACID stand for in databases?", ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Automatic, Central, Internal, Design", "Array, Class, Index, Database"], 0],
            ["Which memory area stores function call frames?", ["Heap", "Stack", "Cache", "ROM"], 1],
            ["What is a closure in JavaScript?", ["A loop", "A function with access to its outer scope", "A CSS selector", "A database"], 1],
            ["Which HTTP status code means 'Not Found'?", ["200", "301", "404", "500"], 2],
            ["What is recursion?", ["A function calling itself", "A loop that never ends", "A type of variable", "A database query"], 0],
            ["Which sorting algorithm has average O(n log n) time?", ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"], 2],
            ["What is the purpose of a primary key?", ["Style a table", "Uniquely identify a record", "Encrypt a database", "Delete duplicates automatically"], 1],
            ["What does DOM stand for?", ["Data Object Model", "Document Object Model", "Digital Output Method", "Document Order Management"], 1]
        ]
    },

    Basketball: {
        Easy: [
            ["How many players from one team are on court?", ["4", "5", "6", "7"], 1],
            ["How many points is a free throw worth?", ["1", "2", "3", "4"], 0],
            ["Which league is famous for professional basketball in the USA?", ["NFL", "NBA", "MLB", "NHL"], 1],
            ["How many points is a shot beyond the arc worth?", ["1", "2", "3", "4"], 2],
            ["Which player is known as King James?", ["Kobe Bryant", "LeBron James", "Stephen Curry", "Kevin Durant"], 1],
            ["What is the height of a standard basketball hoop?", ["8 feet", "9 feet", "10 feet", "11 feet"], 2],
            ["Which player wore jersey number 23 for the Chicago Bulls?", ["Michael Jordan", "Kobe Bryant", "Shaquille O'Neal", "Tim Duncan"], 0],
            ["What is it called when a player scores by putting the ball directly into the hoop?", ["Block", "Dunk", "Steal", "Assist"], 1],
            ["Which player is famous for his three-point shooting?", ["Stephen Curry", "Shaq", "Dennis Rodman", "Yao Ming"], 0],
            ["What is the main objective of basketball?", ["Hit a target", "Score in the opponent's basket", "Kick a ball", "Run around"], 1]
        ],
        Medium: [
            ["How long is an NBA quarter?", ["10 minutes", "12 minutes", "15 minutes", "20 minutes"], 1],
            ["How many personal fouls disqualify an NBA player?", ["4", "5", "6", "7"], 2],
            ["Which team drafted Kobe Bryant?", ["Lakers", "Hornets", "Bulls", "Celtics"], 1],
            ["Who won the NBA championship in 2016?", ["Warriors", "Cavaliers", "Spurs", "Heat"], 1],
            ["What is a triple-double?", ["Three dunks", "Double digits in three statistical categories", "Three three-pointers", "Three assists"], 1],
            ["Which player is nicknamed The Greek Freak?", ["Luka Doncic", "Giannis Antetokounmpo", "Nikola Jokic", "Joel Embiid"], 1],
            ["How many seconds are on the NBA shot clock?", ["14", "20", "24", "30"], 2],
            ["Which team has the most NBA championships historically?", ["Chicago Bulls", "Boston Celtics", "Miami Heat", "Phoenix Suns"], 1],
            ["Who was known as The Answer?", ["Allen Iverson", "Kobe Bryant", "Steve Nash", "Jason Kidd"], 0],
            ["Which position traditionally organizes the offense?", ["Center", "Power Forward", "Point Guard", "Small Forward"], 2]
        ],
        Hard: [
            ["Who holds the NBA all-time scoring record?", ["Kareem Abdul-Jabbar", "LeBron James", "Karl Malone", "Michael Jordan"], 1],
            ["Who recorded the most points in a single NBA game?", ["Kobe Bryant", "Wilt Chamberlain", "Michael Jordan", "LeBron James"], 1],
            ["Which player won the NBA MVP award in 2023?", ["Joel Embiid", "Nikola Jokic", "Giannis", "Luka Doncic"], 0],
            ["Which team completed a 73-9 regular season?", ["Bulls", "Warriors", "Lakers", "Celtics"], 1],
            ["Who was the first player to win NBA Finals MVP unanimously?", ["Michael Jordan", "Shaquille O'Neal", "LeBron James", "Tim Duncan"], 1],
            ["Which player was known as The Big Fundamental?", ["Tim Duncan", "Shaq", "Hakeem Olajuwon", "Dirk Nowitzki"], 0],
            ["What is the NBA record for most assists in a single game?", ["25", "30", "35", "40"], 1],
            ["Which player won the 2008 NBA MVP?", ["Kobe Bryant", "LeBron James", "Chris Paul", "Kevin Garnett"], 0],
            ["Which team did Michael Jordan return to in 1995?", ["Wizards", "Bulls", "Lakers", "Knicks"], 1],
            ["Which player is famous for the skyhook shot?", ["Kareem Abdul-Jabbar", "Magic Johnson", "Larry Bird", "Bill Russell"], 0]
        ]
    },

    Football: {
        Easy: [
            ["How many players are on a football team on the pitch?", ["9", "10", "11", "12"], 2],
            ["Which country won the 2022 FIFA World Cup?", ["France", "Brazil", "Argentina", "Germany"], 2],
            ["What is the maximum number of goals a team can score?", ["5", "10", "Unlimited", "20"], 2],
            ["Who is known as CR7?", ["Neymar", "Cristiano Ronaldo", "Lionel Messi", "Mbappe"], 1],
            ["Which player is known as La Pulga?", ["Ronaldo", "Messi", "Neymar", "Suarez"], 1],
            ["What color card means a player is sent off?", ["Yellow", "Blue", "Red", "Green"], 2],
            ["How long is a standard football match?", ["60 minutes", "80 minutes", "90 minutes", "100 minutes"], 2],
            ["Which country hosted the 2022 FIFA World Cup?", ["Russia", "Qatar", "Brazil", "Japan"], 1],
            ["What is the goalkeeper's main role?", ["Score goals", "Defend the goal", "Take corners", "Coach players"], 1],
            ["What is the term for three goals by one player in a match?", ["Double", "Hat-trick", "Clean sheet", "Brace"], 1]
        ],
        Medium: [
            ["Which club is known as Los Blancos?", ["Barcelona", "Real Madrid", "Atletico Madrid", "Sevilla"], 1],
            ["Who won the 2018 FIFA World Cup?", ["Croatia", "France", "Germany", "Brazil"], 1],
            ["Which player has won the most Ballon d'Or awards?", ["Cristiano Ronaldo", "Lionel Messi", "Zidane", "Ronaldinho"], 1],
            ["Which country has won the most men's FIFA World Cups?", ["Germany", "Italy", "Brazil", "Argentina"], 2],
            ["Which club plays at Anfield?", ["Manchester United", "Liverpool", "Chelsea", "Arsenal"], 1],
            ["What is an offside decision about?", ["Handball", "Player position when involved in play", "A corner", "A penalty"], 1],
            ["Which competition is contested by European national teams?", ["Copa America", "UEFA Euro", "AFCON", "AFC Asian Cup"], 1],
            ["Which club is nicknamed The Red Devils?", ["Liverpool", "Manchester United", "Arsenal", "AC Milan"], 1],
            ["How many minutes is extra time in a standard knockout match?", ["10", "20", "30", "40"], 2],
            ["Which country won Euro 2024?", ["England", "France", "Spain", "Germany"], 2]
        ],
        Hard: [
            ["Which country won the first FIFA World Cup in 1930?", ["Brazil", "Uruguay", "Italy", "Argentina"], 1],
            ["Which club won the first five European Cups?", ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich"], 0],
            ["Who scored the fastest goal in FIFA World Cup history?", ["Hakan Sukur", "Pele", "Ronaldo", "Miroslav Klose"], 0],
            ["Which nation won the 2010 FIFA World Cup?", ["Germany", "Spain", "Netherlands", "Brazil"], 1],
            ["Which player is known as El Fenomeno?", ["Ronaldinho", "Ronaldo Nazario", "Kaka", "Rivaldo"], 1],
            ["Which country won the 2016 UEFA European Championship?", ["France", "Germany", "Portugal", "Italy"], 2],
            ["Who holds the record for most goals in men's FIFA World Cup history?", ["Pele", "Miroslav Klose", "Ronaldo", "Messi"], 1],
            ["Which club won the 2005 UEFA Champions League final?", ["AC Milan", "Liverpool", "Chelsea", "Barcelona"], 1],
            ["Which country hosted the 1998 FIFA World Cup?", ["Brazil", "France", "Italy", "Japan"], 1],
            ["Which team is known as The Old Lady?", ["Inter Milan", "Juventus", "Roma", "Napoli"], 1]
        ]
    }
};

// ==========================================
// QUIZ STATE
// ==========================================

let currentTopic = "";
let currentLevel = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ==========================================
// NAVIGATION
// ==========================================

function showScreen(screenName) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const targetScreen =
        screens[screenName] || document.getElementById(screenName);

    if (!targetScreen) {
        console.error("Screen not found:", screenName);
        return;
    }

    targetScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// LOAD TOPICS
// ==========================================

function loadTopics() {

    topicGrid.innerHTML = "";

    const icons = {
        "General Knowledge": "🌍",
        "Science": "🔬",
        "Mathematics": "📐",
        "Programming": "💻",
        "Basketball": "🏀",
        "Football": "⚽"
    };

    Object.keys(questionBank).forEach(topic => {

        const button = document.createElement("button");

        button.className = "topic-card";

        // Removed the "10 questions per level" text.
        button.innerHTML = `
            <span class="topic-icon">${icons[topic]}</span>
            <h3>${topic}</h3>
        `;

        button.addEventListener("click", () => {
            currentTopic = topic;
            loadDifficulty();
        });

        topicGrid.appendChild(button);
    });
}

// ==========================================
// LOAD DIFFICULTY
// ==========================================

function loadDifficulty() {

    showScreen("difficulty");

    document.getElementById("difficulty-topic-title").textContent =
        currentTopic;

    document.getElementById("difficulty-topic-subtitle").textContent =
        "Choose your challenge level";

    difficultyGrid.innerHTML = "";

    const levels = [
        { name: "Easy", label: "A Piece of Cake", icon: "🌱" },
        { name: "Medium", label: "Getting Trickier", icon: "⚡" },
        { name: "Hard", label: "Final Boss", icon: "🔥" }
    ];

    levels.forEach(level => {

        const button = document.createElement("button");

        button.className = "difficulty-card";

        button.innerHTML = `
            <span class="difficulty-icon">${level.icon}</span>
            <h3>${level.name}</h3>
            <p>${level.label}</p>
        `;

        button.addEventListener("click", () => {
            startQuiz(level.name);
        });

        difficultyGrid.appendChild(button);
    });
}

// ==========================================
// START QUIZ
// ==========================================

function startQuiz(level) {

    currentLevel = level;
    currentQuestionIndex = 0;
    score = 0;
    answered = false;

    currentQuestions = [...questionBank[currentTopic][level]];

    showScreen("quiz");

    document.getElementById("quiz-topic").textContent = currentTopic;
    document.getElementById("quiz-level").textContent = level;

    document.getElementById("stat-topic").textContent = currentTopic;
    document.getElementById("stat-level").textContent = level;

    document.getElementById("score-display").textContent = "0";

    displayQuestion();
}

// ==========================================
// DISPLAY QUESTION
// ==========================================

function displayQuestion() {

    answered = false;

    const question = currentQuestions[currentQuestionIndex];

    document.getElementById("question-number").textContent =
        `Q${currentQuestionIndex + 1}`;

    document.getElementById("question-text").textContent =
        question[0];

    document.getElementById("progress-text").textContent =
        `Question ${currentQuestionIndex + 1}/${TOTAL_QUESTIONS}`;

    document.getElementById("current-score").textContent =
        `Score: ${score}`;

    document.getElementById("stat-answered").textContent =
        `${currentQuestionIndex}/${TOTAL_QUESTIONS}`;

    document.getElementById("stat-correct").textContent = score;

    document.getElementById("progress-fill").style.width =
        `${((currentQuestionIndex + 1) / TOTAL_QUESTIONS) * 100}%`;

    document.getElementById("feedback").textContent = "";

    const nextButton = document.getElementById("next-btn");

    nextButton.disabled = true;

    nextButton.querySelector("span").textContent =
        currentQuestionIndex === TOTAL_QUESTIONS - 1
            ? "See Results"
            : "Next Question";

    optionsContainer.innerHTML = "";

    question[1].forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-btn";

        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(index);
        });

        optionsContainer.appendChild(button);
    });
}

// ==========================================
// SELECT ANSWER
// ==========================================

function selectAnswer(selectedIndex) {

    if (answered) return;

    answered = true;

    const question = currentQuestions[currentQuestionIndex];

    const correctIndex = question[2];

    const buttons = optionsContainer.querySelectorAll("button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== correctIndex) {
            button.classList.add("incorrect");
        }
    });

    const feedback = document.getElementById("feedback");

    if (selectedIndex === correctIndex) {

        score++;

        feedback.textContent = "✓ Correct answer!";

        feedback.className = "feedback correct-feedback";

    } else {

        feedback.textContent =
            `✗ Incorrect! Correct answer: ${question[1][correctIndex]}`;

        feedback.className = "feedback incorrect-feedback";
    }

    document.getElementById("score-display").textContent = score;

    document.getElementById("current-score").textContent =
        `Score: ${score}`;

    document.getElementById("stat-correct").textContent = score;

    document.getElementById("next-btn").disabled = false;
}

// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    if (!answered) return;

    currentQuestionIndex++;

    if (currentQuestionIndex >= TOTAL_QUESTIONS) {
        showResults();
    } else {
        displayQuestion();
    }
}

// ==========================================
// SHOW RESULTS
// ==========================================

function showResults() {

    showScreen("result");

    const percentage = Math.round(
        (score / TOTAL_QUESTIONS) * 100
    );

    document.getElementById("result-score").textContent = score;

    document.getElementById("result-total").textContent =
        TOTAL_QUESTIONS;

    document.getElementById("result-topic").textContent =
        currentTopic;

    document.getElementById("result-level").textContent =
        currentLevel;

    document.getElementById("result-percentage").textContent =
        `${percentage}%`;

    let message = "";
    let description = "";

    if (percentage === 100) {
        message = "Perfect Score! 🏆";
        description = "Outstanding! You answered every question correctly.";
    } else if (percentage >= 80) {
        message = "Excellent Work! 🔥";
        description = "Amazing performance. Keep it up!";
    } else if (percentage >= 60) {
        message = "Great Job! ⭐";
        description = "You have a good understanding of this topic.";
    } else if (percentage >= 40) {
        message = "Keep Practicing! 💪";
        description = "You are improving. Try another round!";
    } else {
        message = "Never Give Up! 🚀";
        description = "Every attempt makes you better. Keep learning!";
    }

    document.getElementById("result-message").textContent = message;

    document.getElementById("result-description").textContent =
        description;

    // Send quiz completion to the existing server API.
    trackQuizCompletion();
}

// ==========================================
// ADMIN ANALYTICS
// ==========================================

function getVisitorId() {

    let visitorId = localStorage.getItem("quizVisitorId");

    if (!visitorId) {

        visitorId =
            typeof crypto !== "undefined" && crypto.randomUUID
                ? crypto.randomUUID()
                : `visitor-${Date.now()}-${Math.random()}`;

        localStorage.setItem("quizVisitorId", visitorId);
    }

    return visitorId;
}

async function trackVisit() {

    try {

        await fetch("/api/track/visit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                visitorId: getVisitorId()
            })
        });

    } catch (error) {

        console.warn("Visit tracking unavailable:", error);

    }
}

async function trackQuizCompletion() {

    try {

        await fetch("/api/track/quiz-complete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                visitorId: getVisitorId(),
                topic: currentTopic,
                difficulty: currentLevel,
                score: score,
                total: TOTAL_QUESTIONS,
                percentage: Math.round(
                    (score / TOTAL_QUESTIONS) * 100
                )
            })
        });

    } catch (error) {

        console.warn("Quiz tracking unavailable:", error);

    }
}

// ==========================================
// BUTTON EVENTS
// ==========================================

document.getElementById("back-to-topics")
    .addEventListener("click", () => {
        showScreen("home");
    });

document.getElementById("next-btn")
    .addEventListener("click", nextQuestion);

document.getElementById("play-again-btn")
    .addEventListener("click", () => {
        startQuiz(currentLevel);
    });

document.getElementById("choose-topic-btn")
    .addEventListener("click", () => {
        showScreen("home");
    });

// ==========================================
// INITIALIZE
// ==========================================

loadTopics();

showScreen("home");

trackVisit();

console.log("Atharba's Quiz loaded successfully!");
