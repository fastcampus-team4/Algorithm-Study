const filePath = process.platform === 'linux' ? 0 : './input.txt';
const [, input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = input.trim().split(' ').map(Number);
const queue = Array.from({ length: arr.length }, (v, i) => i + 1);

const answer = [];
let num = queue.shift();
while (queue.length > 0) {
  answer.push(num);
  if (arr[num - 1] > 0) {
    for (let i = 1; i < arr[num - 1]; i++) {
      queue.push(queue.shift());
    }
    num = queue.shift();
  } else {
    for (let i = 1; i < Math.abs(arr[num - 1]); i++) {
      queue.unshift(queue.pop());
    }
    num = queue.pop();
  }
}
answer.push(num);
console.log(answer.join(' '));
