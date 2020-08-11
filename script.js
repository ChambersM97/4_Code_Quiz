// act like your bringing down from the end of the variable. for example, 
//startButton is equal to the actually button.
//so essentially the button is tag with something that goes off
//if the action being monitored is triggered

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

var totalScore = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
 
    } else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [

    //for (var i = 60; ; i- 5 seconds )

    { question: "Inside which HTML element do we put the JavaScript?",
    answers: [
        { text: 'javascript', correct: false},
        { text: 'scripting', correct: false},
        { text: 'js', correct: false},
        { text: 'script', correct: true}
    ]},

   { question: "Where is the correct place to insert a JavaScript?",
    answers: [
        { text: 'The <body> section', correct: false},
        { text: 'the <head> section', correct: false},
        { text: 'Both the <head> section and the <body> section are correct', correct: true},
    ]},

    
    { question: 'The external JavaScript file must contain the <script>  tag.',
    answers: [
        { text: 'False', correct: false},
        { text: 'True', correct: true},
    ]},

    { question: 'Is JavaScript case-sensitive?',
    answers: [
        { text: 'False', correct: false},
        { text: 'True', correct: true},

    ]},

    { question: 'Which operator is used to assign a value to a variable?',
    answers: [
        { text: '-', correct: false},
        { text: "*", correct: false},
        { text: "x", correct: false},
        { text: "=", correct: true},

    ]},

    { question: 'Which even occurs when the user clocks on an HTML element?',
    answers: [
        { text: 'onclick', correct: true},
        { text: 'onmouseclick', correct: false},
        { text: 'onmouseover', correct: false},
        { text: 'onchange', correct: false},

    ]},

    { question: 'JavaScript is the same as Java',
    answers: [
        { text: 'True', correct: false},
        { text: 'False', correct: true},
    ]},

    { question: 'How do you add a comment in a Javascript file?',
    answers: [
        { text: '<!--This is a comment-->', correct: false},
        { text: '//This is a comment', correct: true},
        { text: 'This is a comment', correct: false},
    ]},

    { question: 'How does a for loop start?',
    answers: [
        { text: 'while i = 1 to 10', correct: false},
        { text: 'while (i <= 10; i++)', correct: false},
        { text: 'while (i <= 10)', correct: true},
        

    ]},

    { question: 'How do you create a function in JavaScript?',
    answers: [
        { text: 'function = myFunction()', correct: false},
        { text: 'function:myFunction()', correct: false},
        { text: 'function myFunction()', correct: true},
    ]}
]