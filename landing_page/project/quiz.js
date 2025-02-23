const questions = [
    {
        question: "How much do you know about money stuff?",
        options: [
            "I'm just getting started 🌱",
            "I know some basics 👍",
            "I'm pretty comfortable 💪",
            "I'm an expert! 🚀"
        ]
    },
    {
        question: "How do you feel about budgeting?",
        options: [
            "What's that? 😅",
            "I think about it sometimes 🤔",
            "I use budgeting apps 📱",
            "I have a detailed budget system 📊"
        ]
    },
    {
        question: "Have you ever invested in stocks or crypto?",
        options: [
            "Nope, sounds scary 😨",
            "I've thought about it 🤔",
            "I've tried a little bit 💰",
            "I have a portfolio 📈"
        ]
    },
    {
        question: "If someone gave you ₹10,000 today, what would you do with it?",
        options: [
            "Spend it all 🛍️",
            "Save some, spend some 💰",
            "Invest most of it 📈",
            "Put it in my emergency fund 🏦"
        ]
    },
    {
        question: "How confident are you about your money skills?",
        options: [
            "Not at all 😔",
            "Kind of nervous 😅",
            "Pretty confident 😊",
            "Very confident 💪"
        ]
    },
    {
        question: "Do you track your monthly expenses?",
        options: [
            "Never thought about it",
            "Sometimes I check my bank account",
            "I use a spreadsheet",
            "I use budgeting apps and track everything"
        ]
    },
    {
        question: "What's your approach to saving money?",
        options: [
            "I spend everything I earn",
            "I save when I can",
            "I save a fixed amount monthly",
            "I follow the 50/30/20 rule"
        ]
    },
    {
        question: "How do you handle unexpected expenses?",
        options: [
            "I panic and borrow money",
            "I use my credit card",
            "I have some savings for emergencies",
            "I have a dedicated emergency fund"
        ]
    },
    {
        question: "What's your knowledge about tax planning?",
        options: [
            "I don't know anything about taxes",
            "I know the basics",
            "I understand tax deductions",
            "I optimize my taxes strategically"
        ]
    },
    {
        question: "How do you feel about retirement planning?",
        options: [
            "Too young to think about it",
            "I should probably start",
            "I have a retirement account",
            "I have a detailed retirement strategy"
        ]
    }
];

let currentQuestion = 0;
const answers = [];

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function showQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <h2>${question.question}</h2>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option ${answers[currentQuestion] === index ? 'selected' : ''}" 
                     onclick="selectOption(${index})">
                    ${option}
                </div>
            `).join('')}
        </div>
    `;
    
    updateProgress();
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Finish' : 'Next';
}

function selectOption(index) {
    answers[currentQuestion] = index;
    showQuestion();
}

function calculateLevel() {
    const total = answers.reduce((sum, answer) => sum + answer, 0);
    const average = total / answers.length;
    
    if (average <= 1) return 'beginner';
    if (average <= 2) return 'intermediate';
    return 'advanced';
}

function showResults() {
    const level = calculateLevel();
    const container = document.querySelector('.quiz-container');
    
    const recommendations = {
        beginner: {
            title: "Basics of Finance",
            description: "Perfect for building a strong foundation in financial literacy."
        },
        intermediate: {
            title: "Intermediate Financial Management",
            description: "Dive deeper into investment strategies and advanced budgeting."
        },
        advanced: {
            title: "Advanced Financial Planning",
            description: "Master complex investment strategies and wealth management."
        }
    };

    container.innerHTML = `
        <div class="results-container">
            <h1>Assessment Complete!</h1>
            <div class="results-score">
                ${level.charAt(0).toUpperCase() + level.slice(1)} Level
            </div>
            <div class="results-message">
                Based on your responses, we recommend starting with our ${level} course track.
            </div>
            <div class="course-recommendation">
                <h2>${recommendations[level].title}</h2>
                <p>${recommendations[level].description}</p>
                <a href="../project/NewHomePageFinance/index.html" class="btn-primary">Start Learning</a>
            </div>
        </div>
    `;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (answers[currentQuestion] === undefined) {
        alert('Please select an option before continuing');
        return;
    }
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResults();
    }
});

// Initialize the quiz
showQuestion();