var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var controlsElement = document.getElementById("controls");
var timerElement = document.getElementById("quiz-time-left");

var shuffledQuestions;
var currentQuestionIndex = 0;
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

function setNextQuestion(event) {
   resetAnswers();
   showQuestion(shuffledQuestions[currentQuestionIndex]); 
};

function resetAnswers () {
   while (answerButtonElement.firstChild) {
      answerButtonElement.removeChild(answerButtonElement.firstChild)
   };
};

function resetQuestion () {
   questionContainerElement.classList.add("hide");
};

function showQuestion(question) {
   questionElement.innerText = question.question;
   question.answers.forEach(answer => {
      var button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.choice) {
         button.dataset.choice = answer.choice;
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
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
      if (selectedButton.dataset.choice) {
         var statusDisplay = document.createElement("div");
         answerButtonElement.appendChild(statusDisplay);
         Object.assign(statusDisplay.style, statusStyle);
         statusDisplay.innerText = "Correct!";
         setTimeout(function(){
            setNextQuestion();
         }, 1000);
      } else {
         var statusDisplay = document.createElement("div");
         statusDisplay.innerText = "Wrong!";
         Object.assign(statusDisplay.style, statusStyle);
         answerButtonElement.appendChild(statusDisplay);
         setTimeout(function(){
            setNextQuestion();
         }, 1000);
      };
   } else {
      setTimeout(function() {
         endGame();
      }, 1000);
   };
   currentQuestionIndex++;
};

function endGame() {
   resetAnswers();
   resetQuestion();
};

var questionArray = [
   {
      question: "What is the symbol when opening and closing a function?",
      answers: [
         { text: "1. Curly brackets", choice: false },
         { text: "2. Square brackets", choice: false },
         { text: "3. Parentheses", choice: true },
         { text: "4. Single quotes", choice: false },
      ]
   },
   {
      question: "What's an example of a tag in HTML?",
      answers: [
         { text: "1. <p>", choice: true },
         { text: "2. 'if'", choice: false },
         { text: "3. var", choice: false },
         { text: "4. .btn", choice: false },

      ]
   },
   {
      question: "A _____ uses single or double quotation marks that identifies it as text.",
      answers: [
         { text: "1. variable", choice: false },
         { text: "2. string", choice: true },
         { text: "3. boolean", choice: false },
         { text: "4. constant", choice: false },

      ]
   }
];