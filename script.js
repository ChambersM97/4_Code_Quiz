// act like your bringing down from the end of the variable. for example, 
//startButton is equal to the actually button.
//so essentially the button is tag with something that goes off
//if the action being monitored is triggered

const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() = .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
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
    })

}


function selectAnswer() {

}

const questions = [
    {
        question: "What is Bob's favorite hardware store?",
        answers: [
            { text: 'Home Depot', correct: true},
            { text: 'Lowes', correct: false}
        ]
    }
]