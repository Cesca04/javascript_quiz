//defining 10 questions for the quiz
let quizQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["javascript", "scripting", "script"],
    answer: "script",
  },
  { 
    question:"Where is the correct place to insert a JavaScript in an HTML file?",
    options: ["The head section", "The body section", "Both The head section and The body section"],
    answer: "The body section",
  },
  { 
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
    options: ["script herf='xxx.js'", "script src='xxx.js'", "script name='xxx.js'"],
    answer: "script src='xxx.js",

  },
  { 
    question: "How do you write 'Hello World' in an alert box in a javaScript file?", 
    options: ["alertBox('Hello World');", "alert('Hello World');", "msg('Hello World');"],
    answer: "alert('Hello World');",

  },
  { 
      question: "How  do you create a function  called 'myfunction' in a javaScript file?", 
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
      answer: "function myFunction()",

  },
  { 
      question: "How do you call a function named 'myFunction' in a javaScript file?", 
      options: ["call myFunction()", "call function myFunction()", "myFunction()"],
      answer: "myFunction()",

  },
  { 
      question: "How to write an IF statement (conditionals statements) in JavaScript?", 
      options: ["if i == 5 then", "if i = 5 then", "if (i == 5))"],
      answer: "if i == 5 then",

  },
  { 
      question: "Which event occurs when the user clicks on an HTML element?", 
      options: ["Onclick", "Onchange", "OnMouseChange"],
      answer: "Onclick",

  },
  { 
      question: "Can you confidently say JavaScript is the same as Java.", 
      options: ["True", "False"],
      answer: "False",

  },
  { 
      question: "What is the correct way to write a JavaScript array?", 
      options: ['var colors = ["red", "green", "blue"]', 'var colors = [1:"red", 2:"green", 3:"blue"]', 'var colors = "red", "green", "blue"'],
      answer: 'var colors = ["red", "green", "blue"]',

  },
];

//setting total score to 0 and number of current question number to 0
let currentQuestion = 0;
let score = 0;

// getting all the elements we need from our html
const questionCountElement = document.querySelector("#question-count");
const questionElement = document.querySelector("#question");
const resultElement = document.querySelector("#result");
const redoBtnElement = document.querySelector("#redo-btn");
const submitBtnElement = document.querySelector("#submit_button");
const optionsFormsElement = document.querySelector("#options_form");

//for the questions to display on our UI, we defind the function displayQuestion()
function displayQuestion(){

  //we are setting current as each of the questions in the quizQuestion 
  let current = quizQuestions[currentQuestion];
  //setting the count_element element as the current question number of the total number of questions
  questionCountElement.innerHTML = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  //inserting each of the quiz question in the #question tag
  questionElement.textContent = current.question;


  //interating the option object in the quizQuestion and storing it in the html variable
  let html = ""
//here for each element in the option object, we are getting the element and its index
  current.options.forEach((option, index) => {
    html += `<label for="user-input"><input type="radio" name="option" value="${option}" id="user-input" style="height:20px; width:20px; vertical-align: middle;">    <span id="option${index}">${option}</span></label> <br/>`
  });

  //replacing #option-form with our content of html that we have interated over
optionsFormsElement.innerHTML = html
};

//we are checking if the answer the user picked is wrong or correct
function checkAnswer(){

  //here is checking what the user picked
  const selectedOption = document.querySelector("input[name = 'option']:checked");
  //here it is checking if the user did not select anything, dont do anything
  if (!selectedOption) return;

//here we are comparing the user input with the correct answer
  const selectedAnswer = selectedOption.value;
  //where the user selected answer is equal to the current quizquestion's answer, add to the score and print correct
  if (selectedAnswer === quizQuestions[currentQuestion].answer){
    score++
    resultElement.textContent = "Correct!"
  }

  // where user selected answer is equal not to the current quizquestion's answer,  print wrong answer and the current answer
  else{
    resultElement.textContent = `Wrong Answer! The correct answer is ${quizQuestions[currentQuestion].answer}`
  }

  //this is to move to the next quetion
  currentQuestion++;
  //where the next question is lower than the total quizquestion, call the displayquestion function
  if (currentQuestion < quizQuestions.length){
    displayQuestion()
  }
//when the user has exhausted the question, hide the submit button and display what the user scored scored 
  else{
    resultElement.textContent = `You Scored ${score} out of ${quizQuestions.length}`

    submitBtnElement.style.display = "none"
  };

};

//this is listening to when the user clicks the submit button
submitBtnElement.addEventListener("click", checkAnswer)

//initilalizing the displayQuestion function
displayQuestion();
