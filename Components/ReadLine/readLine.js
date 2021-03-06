const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);

let ans = num1 + num2;

rl.question(`What is ${num1} + ${num2} ? \n`, (input) => {
  if (input.trim() == ans) {
    rl.close();
  } else {
    rl.setPrompt("Incorrect Response! Please try again \n");
    rl.prompt();
    rl.on("line", (input) => {
      if (input.trim() == ans) {
        rl.close();
      } else {
        rl.setPrompt(`Your Rensponse ${input} is Incorrect, Try Again \n`);
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("You got the corect answer");
});
