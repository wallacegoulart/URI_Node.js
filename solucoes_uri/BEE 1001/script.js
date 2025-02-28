const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b;

readline.question("Digite o valor de A: ", (inputA) => {
  a = parseInt(inputA);
  readline.question("Digite o valor de B: ", (inputB) => {
    b = parseInt(inputB);
    let x = a + b;
    console.log("X = " + x);
    readline.close();
  });
});
