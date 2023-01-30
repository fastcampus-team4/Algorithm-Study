const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let queue = [];
let result = [];

for (let i = 1; i < array.length; i++) {
  const command = array[i].trim().split(" ")[0];
  switch (command) {
    case "push":
      const num = Number(array[i].split(" ")[1]);
      queue.push(num);
      break;
    case "pop":
      queue[0] ? result.push(queue[0]) : result.push(-1);
      queue.shift();
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      queue.length === 0 ? result.push(1) : result.push(0);
      break;
    case "front":
      queue.length === 0 ? result.push(-1) : result.push(queue[0]);
      break;
    case "back":
      queue.length === 0
        ? result.push(-1)
        : result.push(queue[queue.length - 1]);
      break;
  }
}

console.log(result);
