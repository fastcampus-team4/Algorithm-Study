// https://www.acmicpc.net/problem/1158
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ').map(Number);

const [N, K] = input;

function solution(n, k) {
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
  return `<${answer.join(', ')}>`;
}

console.log(solution(N, K));
