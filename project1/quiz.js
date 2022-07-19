let start = document.querySelector('.Restart');
let rule_box = document.querySelector('.rules');

let button = document.getElementById('btn');

// start.onclick = () => {
//     rule_box.classList.add("activeInfo");
// }

function myFunction(){
    document.getElementById("rules").classList.add("active");  //continue
    document.getElementById("btn").classList.add("act");
};

function myfu() {
    document.getElementById("main").classList.add("actives");  //start
    document.getElementById('btn').remove();
}

const quizData = [
    {
        question: "   Q1. Which statement is true about Java?",
        a: "Java is a sequence-dependent programming language",
        b: "Java is a code dependent programming language",
        c: "Java is a platform-dependent programming language",
        d: "Java is a platform-independent programming language",
        correct: "d",
    },
    {
        question: "   Q2. Which component is used to compile, debug and execute the java programs?",
        a: "JRE",
        b: "JIT",
        c: "JDK",
        d: "JVM",
        correct: "c",
    },
    {
        question: "  Q3 Which one of the following is not a Java feature?",
        a: "Object-oriented",
        b: "Use of pointers",
        c: "Portable",
        d: "Dynamic and Extensible",
        correct: "b",
    },
    {
        question: "  Q4  Which of the following is not an OOPS concept in Java?",
        a: "Polymorphism",
        b: "Inheritance",
        c: "Compilation",
        d: "Encapsulation",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 class="sd">You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()" class="reloadbtn">Reload</button>
           `
       }
    }
})



