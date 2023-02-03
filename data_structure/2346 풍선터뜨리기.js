const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const b = array[1].split(" ").map(parseFloat);
const queue = Array.from({ length: b.length }, (v, i) => i + 1);
// let queue = []
// for (let i = 0; i < b.length; i++) {
//   order.push(i + 1);
// }

let answer = [];
let num = queue.shift();

while (queue.length > 0) {
  answer.push(num);
  if (b[num - 1] > 0) {
    for (let i = 1; i < b[num - 1]; i++) {
      queue.push(queue.shift());
    }
    num = queue.shift();
  } else {
    for (let i = 1; i < Math.abs(b[num - 1]); i++) {
      queue.unshift(queue.pop());
    }
    num = queue.pop();
  }
}

answer.push(num);
console.log(answer);
