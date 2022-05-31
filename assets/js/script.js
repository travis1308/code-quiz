var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var controlsElement = document.getElementById("controls");
var timerElement = document.getElementById("quiz-time-left");

var shuffledQuestions, currentQuestionIndex;
var startHeading = document.createElement("h2");
var startText = document.createElement("div");
var startButton = document.createElement("button");

startHeading.innerText = "Coding Quiz Challenge";
startHeading.style.color = "red"; 
controlsElement.appendChild(startHeading);
startText.innerText = "This quiz is designed to test your knowledge about coding elements related to HTML, CSS, and JS. Try to answer the questions within the time limit.";
startText.style.padding = "0 0 25px 25px";
controlsElement.appendChild(startText);
startButton.innerText = "Start";
startButton.classList.add("start-btn");
startButton.classList.add("btn");
controlsElement.appendChild(startButton);

startButton.addEventListener("click", startGame);

function startGame() {
   startHeading.classList.add("hide");
   startButton.classList.add("hide");
   startText.classList.add("hide");
   shuffledQuestions = questionArray.sort(() => Math.random() - 0.5);
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove("hide");
   setNextQuestion();
   countdownTimer();
};

function countdownTimer() {
   var timeLeft = 75;

   var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
         timerElement.innerHTML = "Time: " + timeLeft;
         timeLeft--;
      } else if (timeLeft === 1) {
         timerElement.innerHTML = "Time: " + timeLeft;
         timeLeft--;
      } else {
         timerElement.textContent = " ";
         clearInterval(timeInterval);
      }
   }, 1000);
};

function setNextQuestion() {
   resetQuestion();
   showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function resetQuestion () {
   while (answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild)
   };
};

function showQuestion(question) {
   questionElement.innerText = question.question;
   question.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
         button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer)
      answerButtonElement.appendChild(button)});
};

function selectAnswer(event) {
   var selectedButton = event.target;
   var statusStyle = {
      fontStyle: "italic",
      color: "gray",
      fontSize: "50px"
   };
   currentQuestionIndex++;
   if (selectedButton.dataset.correct) {
      var statusDisplay = document.createElement("div");
      statusDisplay.innerText = "Correct!";
      Object.assign(statusDisplay.style, statusStyle);
      answerButtonElement.appendChild(statusDisplay);
   } else {
      var statusDisplay = document.createElement("div");
      statusDisplay.innerText = "Wrong!";
      Object.assign(statusDisplay.style, statusStyle);
      answerButtonElement.appendChild(statusDisplay);
   };
   // if (shuffledQuestions.length > currentQuestionIndex + 1) {
      
   // };
};

var questionArray = [
   {
      question: "What is the symbol when opening and closing a function?",
      answers: [
         { text: "1. Curly brackets", correct: false },
         { text: "2. Square brackets", correct: false },
         { text: "3. Parentheses", correct: true },
         { text: "4. Single quotes", correct: false },
      ]
   },
   {
      question: "What's an example of a tag in HTML?",
      answers: [
         { text: "1. <p>", correct: true },
         { text: "2. 'if'", correct: false },
         { text: "3. var", correct: false },
         { text: "4. .btn", correct: false },

      ]
   },
   {
      question: "A _____ uses single or double quotation marks that identifies it as text.",
      answers: [
         { text: "1. variable", correct: false },
         { text: "2. string", correct: true },
         { text: "3. boolean", correct: false },
         { text: "4. constant", correct: false },

      ]
   }
];