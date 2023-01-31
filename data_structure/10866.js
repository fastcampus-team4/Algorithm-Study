// https://www.acmicpc.net/problem/10866

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim());

let deque = [];
let ans = 0;
let ansArr = [];

for (let i = 1; i < input.length; i++) {
  const command = input[i].split(" ")[0];

  if (command === "push_front") {
    ans = input[i].split(" ")[1];
    deque.unshift(ans);
  } else if (command === "push_back") {
    ans = input[i].split(" ")[1];
    deque.push(ans);
  } else if (command === "pop_front") {
    if (deque.length === 0) ansArr.push(-1);
    else {
      ans = deque.shift();
      ansArr.push(ans);
    }
  } else if (command === "pop_back") {
    if (deque.length === 0) ansArr.push(-1);
    else {
      ans = deque.pop();
      ansArr.push(ans);
    }
  } else if (command === "size") ansArr.push(deque.length);
  else if (command === "empty") {
    if (deque.length === 0) ansArr.push(1);
    else ansArr.push(0);
  } else if (command === "front") {
    if (deque.length === 0) ansArr.push(-1);
    else ansArr.push(deque[0]);
  } else if (command === "back") {
    if (deque.length === 0) ansArr.push(-1);
    else ansArr.push(deque[deque.length - 1]);
  }
}

console.log(ansArr.join("\n"));
