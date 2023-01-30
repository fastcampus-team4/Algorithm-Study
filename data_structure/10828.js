// 스택 : https://www.acmicpc.net/problem/10828

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim());

let stack = [];
let ans = 0;

let ansArr = [];

for (let i = 1; i < input.length; i++) {
  if (input[i].includes("push")) {
    ans = input[i].split(" ")[1];
    stack.push(ans);
  } else if (input[i].includes("pop")) {
    if (stack.length === 0) ansArr.push(-1);
    else {
      ans = stack.pop();
      ansArr.push(ans);
    }
  } else if (input[i].includes("size")) {
    ansArr.push(stack.length);
  } else if (input[i].includes("empty")) {
    if (stack.length === 0) ansArr.push(1);
    else ansArr.push(0);
  } else if (input[i].includes("top")) {
    if (stack.length === 0) ansArr.push(-1);
    else ansArr.push(stack[stack.length - 1]);
  }
}

console.log(ansArr.join("\n"));
