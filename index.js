var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name?\n");
var score = 0;
console.log("Welcome " + userName + " to know-me-quiz");
console.log("Press Q to exit");

function play(question, answer) {
  var userAnswer = readlineSync.question(`${question}\nYour Answer is: `).toUpperCase();
  if (userAnswer === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    if (userAnswer === "Q") {
      return "Quit";
    }
    console.log("Wrong!");
  }
  console.log("Your current score is: " + score);
  console.log("-------------");
}

// array

var questions = [{
  question: `Ⅰ. Where I live?
  A. Geospace
  B. Interplanetary space
  C. Interstellar space
  D. Intergalactic space`,
  answer: "A"
}, {
  question: `Ⅱ. What is best explaining astrophysics movie?
  A. Inception
  B. Fast & Furious
  C. Interstellar
  D. Matrix`,
  answer: "C"
}, {
  question: `Ⅲ. How are aurora borealis formed?
  A. Volcanic Eruptions
  B. Earthquake
  C. Tornado
  D. Solar wind`,
  answer: "D"
}, {
  question: `Ⅳ. What are celestial bodies?
  A. Ocean entities
  B. Entities outside earth
  C. 
  D. Shodan/Censys`,
  answer: "D"
}, {
  question: `Ⅴ. What is time acoording to albert einstein?
  A. Some entity
  B. Rats ticks
  C. Stubborn Illusion
  D. Matter`,
  answer: "C"
}, {
  question: `Ⅵ. Who emits maximum energy among the following?
  A. Supernova
  B. Black Hole
  C. Star
  D. Meteors`,
  answer: "A"
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  const result = play(currentQuestion.question, currentQuestion.answer);
  if (result === "Quit") {
    console.log(`Bye see you soon again.`)
    break;
  }

}
console.log(`${userName} your final score is: ${score}. Thank you for playing....`);