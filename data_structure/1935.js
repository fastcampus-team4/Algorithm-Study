// https://www.acmicpc.net/problem/1935

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim());

// 내답 틀림 왜?
let stack = [];
let a,
  b = 0;
let answer = 0;
let num = 0;
let alpabet = new Map();

for (let i = 0; i < input[1].length; i++) {
  if (input[1][i].charCodeAt(0) >= 65 && input[1][i].charCodeAt(0) <= 90) {
    if (!alpabet.has(input[1][i])) {
      num++;
      alpabet.set(input[1][i], num);
      stack.push(Number(alpabet.get(input[1][i])));
    } else stack.push(Number(alpabet.get(input[1][i])));
  } else if (input[1][i] === "+") {
    b = stack.pop();
    a = stack.pop();
    stack.push(a + b);
  } else if (input[1][i] === "-") {
    b = stack.pop();
    a = stack.pop();
    stack.push(a - b);
  } else if (input[1][i] === "*") {
    b = stack.pop();
    a = stack.pop();
    stack.push(a * b);
  } else if (input[1][i] === "/") {
    b = stack.pop();
    a = stack.pop();
    stack.push(a / b);
  }
  answer = stack[0].toFixed(2);
}

console.log(answer);

// 구글링 답
// const N = Number(input.shift());
// const expression = input.shift();
// const stack = [];
// let result = 0;
// let sh = new Map();

// for (let i = 0; i < expression.length; i++) {
//   let current = expression[i];

//   if (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90) {
//     if (!sh.has(current)) {
//       sh.set(current, input.shift());
//     }
//     stack.push(sh.get(current));
//   } else {
//     let second = Number(stack.pop());
//     let first = Number(stack.pop());
//     let tempResult = 0;

//     switch (current) {
//       case "+":
//         tempResult = first + second;
//         break;
//       case "-":
//         tempResult = first - second;
//         break;
//       case "/":
//         tempResult = first / second;
//         break;
//       case "*":
//         tempResult = first * second;
//         break;
//     }

//     stack.push(tempResult);
//   }
// }

// console.log(stack[0].toFixed(2));
