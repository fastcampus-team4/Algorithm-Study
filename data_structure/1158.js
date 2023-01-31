// 요세푸스 : https://www.acmicpc.net/problem/1158

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let [n, k] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((i) => Number(i.trim()));

let queue = [];
let answer = [];

for (let i = 0; i < n; i++) {
  queue.push(i + 1);
}

while (queue.length) {
  for (let i = 1; i < k; i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}

console.log("<" + answer.join(", ") + ">");
