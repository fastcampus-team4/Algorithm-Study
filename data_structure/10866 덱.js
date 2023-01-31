const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let deque = [];
let answer = [];

for (let i = 1; i < array.length; i++) {
  const command = array[i].split(" ")[0];
  const x = Number(array[i].split(" ")[1]);
  switch (command) {
    case "push_front":
      deque.unshift(x);
      break;
    case "push_back":
      deque.push(x);
      break;
    case "pop_front":
      deque.length ? answer.push(deque[0]) : answer.push(-1);
      deque.shift();
      break;
    case "pop_back":
      deque.length ? answer.push(deque[deque.length - 1]) : answer.push(-1);
      deque.pop();
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      !deque.length ? answer.push(1) : answer.push(0);
      break;
    case "front":
      deque.length ? answer.push(deque[0]) : answer.push(-1);
      break;
    case "back":
      deque.length ? answer.push(deque[deque.length - 1]) : answer.push(-1);
      break;
  }
}

console.log(answer.join("\n"));
