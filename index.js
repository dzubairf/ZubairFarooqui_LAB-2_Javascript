const questionBank = [
    {
        question: "If the following five words are arranged in alphabetical order, then which word will come in the middle?",
        options: ["Electric", "Elector", "Electrode", "Elect"],
        answer: "Electric"
    },
    {
        question: "Arrange the given words in the alphabetical order and choose the one that comes at second place.",
        options: ["Bathing", "Banking", "Backing", "Banishing"],
        answer: "Banishing"
    },
    {
        question: "If the following five words are arranged in alphabetical order, then which word will come in the middle?",
        options: ["Cruise", "Crupper", "Crusade", "Crumb"],
        answer: "Crumb"
    },
    {
        question: "If the following five words are arranged in alphabetical order, then which word will come in the middle?",
        options: ["Manipulate", "Minimalist", "Minority", "Ministerial"],
        answer: "Ministerial"
    },
    {
        question: "If the following five words are arranged in alphabetical order, then which word will come in the middle?",
        options: ["Sentinel", "Sentimentally", "Sententious", "Sentence"],
        answer: "Sentimentally"
    }]


const quiz = document.getElementById('quiz')
const question = document.getElementById('question');
const option0 = document.getElementById('choice0');
const option1 = document.getElementById('choice1');
const option2 = document.getElementById('choice2');
const option3 = document.getElementById('choice3');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const userPercentage = document.getElementById('percentage');
let currentQuestion = 0;
let totalQuestion = questionBank.length;
const progress = document.getElementById('progress');
let previousQuestions = [];
let pickedQuestion = {}
let coreectAnswer = 0

function pickRandom() {
    let random = -1
    while (previousQuestions.includes(random) || random === -1) {
        random = Math.floor(Math.random() * totalQuestion);
    }
    previousQuestions.push(random)
    pickedQuestion = questionBank[random]
}

function getProgress() {
    progress.textContent = `Question ${currentQuestion} of ${totalQuestion}`;
}

function getQuestion() {
    question.textContent = pickedQuestion.question;
    option0.textContent = pickedQuestion.options[0];
    option1.textContent = pickedQuestion.options[1];
    option2.textContent = pickedQuestion.options[2];
    option3.textContent = pickedQuestion.options[3];
}


function checkAnswer(userGuess) {
    if (userGuess == pickedQuestion.answer) {
        coreectAnswer++
    } else {
    }
    currentQuestion++
    startQuiz();
}

function startQuiz() {
    if (previousQuestions.length < totalQuestion) {
        getProgress();
        pickRandom();
        getQuestion();
    } else {
        let userResult = (100 * coreectAnswer) / totalQuestion;
        quiz.classList.add('hidden')
        userPercentage.textContent = `Your Score is ${userResult}%`
        userPercentage.classList.remove('hidden')

        return
    }
}

btn0.addEventListener("click", function () {
    checkAnswer(option0.textContent);
})

btn1.addEventListener("click", function () {
    checkAnswer(option1.textContent);
})

btn2.addEventListener("click", function () {
    checkAnswer(option2.textContent);
})

btn3.addEventListener("click", function () {
    checkAnswer(option3.textContent);
})


startQuiz();