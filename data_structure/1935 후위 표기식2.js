const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, expressions, ...nums] = array;
//알파벳과 숫자를 매치하기 위해
const transformer = {};
//대문자 A의 코드 번호
let A = 65;
const numbers = nums.map(Number);
const operators = ["+", "-", "/", "*"];
//연산 결과를 담을 stack
let stack = [];

for (let i = 0; i < n; i++) {
  const alphabets = String.fromCharCode(A++);
  console.log(alphabets);
  transformer[alphabets] = numbers[i];
}

const transformerExpression = expressions
  .split("")
  .map((value) => (!operators.includes(value) ? transformer[value] : value));

// console.log(transformerExpression);

const calculator = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

for (let i = 0; i < transformerExpression.length; i++) {
  let pushValue = transformerExpression[i];
  if (operators.includes(pushValue)) {
    let back = stack.pop();
    let front = stack.pop();
    const calcFunc = calculator[pushValue];
    pushValue = calcFunc(front, back);
  }
  stack.push(pushValue);
}

// console.log(stack);
answer = (Math.floor(stack[0] * 100) / 100).toFixed(2);

console.log(answer);
