const startbutton=document.getElementById('start-btn')
const nextbutton=document.getElementById('next-btn')
const questioncontainerElement=document.getElementById('question-container') 
const questionelement = document.getElementById('question')
const answerbuttonselement = document.getElementById('answer-buttons')
  

let shuffledquestions, currentquestionindex

startbutton.addEventListener('click',startgame)

function startgame(){
    console.log('started')
    startbutton.classList.add('hide')
    shuffledquestions = questions.sort(() => Math.random - .5)
    currentquestionindex = 0
    questioncontainerElement.classList.remove('hide')
    setnextquestion()


}
function setnextquestion(){
    resetstate()
    showquestion(shuffledquestions[currentquestionindex])


}
function showquestion(question)
{
   questionelement.innerText = question.question
   question.answers.forEach(answer =>{
       const button = document.createElement('button')
       button.innerText = answer.text
       button.classList.add('btn')
       if(answer.correct){
           button.dataset.correct =  answer.correct
       }
       button.addEventListener('click' ,setanswer)
       answerbuttonselement.appendChild(button)
   })
}
function resetstate()
{
    nextbutton.classList.add('hide')
    while(answerbuttonselement.firstChild)
    {
        answerbuttonselement.removeChild(answerbuttonselement.firstChild)
    }
}
function setanswer(){

}
const  questions =[
    {
        question: 'what is 2+2 ? ',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]

