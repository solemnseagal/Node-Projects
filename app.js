const { stdin, stdout } = process;
const readLine = require("readline");
const rl = readLine.createInterface({
  input: stdin,
  output: stdout,
});

const num1 = Math.floor(Math.random() * 10 + 1);
const num2 = Math.floor(Math.random() * 10 + 1);
const answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}?\n`, (input) => {
  if (Number(input.trim()) === answer) {
    console.log("Correct!!!");
    rl.close();
  } else {
    if (!Number(input.trim())) {
      rl.setPrompt(`Incorrect input type, please input a number\n`);
    } else {
      rl.setPrompt(`Answer is incorrect, please try again\n`);
    }
    rl.prompt();
    rl.on("line", (userInput) => {
      if (Number(userInput.trim()) === answer) {
        console.log("Correct!!!");
        rl.close();
      } else {
        if (!Number(userInput.trim())) {
          rl.setPrompt(`Incorrect input type, please input a number\n`);
        } else {
          rl.setPrompt(
            `Answer of ${userInput} is incorrect, please try again\n`
          );
        }
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("End of process");
});
