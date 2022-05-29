var body = document.body;
var containerEl = document.createElement("main");
var h1El = document.createElement("h1");
var questionContainer = document.createElement("div");
var h2El = document.createElement("h2");
var listEl = document.createElement("ol");
var li1 = document.createElement("li")
var li2 = document.createElement("li")
var li3 = document.createElement("li")
var li4 = document.createElement("li")
var hsEl = document.createElement("header");


h1El.textContent = "Welcome to Code Quiz Challenge!";
hsEl.textContent = "View High Scores";
h2El.textContent = "Please answer this question";
li1.textContent = "Answer 1";
li2.textContent = "Answer 2";
li3.textContent = "Answer 3";
li4.textContent = "Answer 4";

body.appendChild(hsEl);
body.appendChild(containerEl);
containerEl.appendChild(h1El);
containerEl.appendChild(questionContainer);
questionContainer.appendChild(h2El);
questionContainer.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto, width: 50%; text-align:center;");
questionContainer.setAttribute("style", "margin:auto, width: 50%; text-align:center;");
listEl.setAttribute("style", "text-align: left; padding: 20px;");

li1.setAttribute("style", " color:white; background: #666666; padding: 5px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px;");