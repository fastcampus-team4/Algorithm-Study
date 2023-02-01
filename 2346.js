// https://www.acmicpc.net/problem/2346

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, ...numsList] = input;
const arr = numsList.map((e) => e.split(' ').map(Number))[0];

function solution(arr) {
  const queue = Array.from({ length: arr.length }, (v, i) => i + 1);
  let answer = [];
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
  return answer.join(' ');
}

console.log(solution(n, arr));
