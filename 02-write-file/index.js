const fs = require('fs');
const path = require('path');
const process = require("process");
const readline = require("readline");


const writeText = fs.createWriteStream(
    path.join(__dirname, 'mynotes.txt')
);


const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout });

console.log('Введите текст');

const answer = rl.on("line", (line) => {
  if (line == "exit") {
    rl.close();
  } else {
    writeText.write(line);
  }
});

