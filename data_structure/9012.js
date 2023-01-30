// https://www.acmicpc.net/problem/9012
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const T = Number(input.shift());
function solution(n, input) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let answer = 'YES';
    let stack = [];
    let str = input[i];

    for (let j = 0; j < str.length; j++) {
      if (str[j] === ')') {
        if (stack.length === 0) {
          answer = 'NO';
          break;
        }
        stack.pop();
      } else {
        stack.push(str[j]);
      }
    }
    if (stack.length > 0) {
      answer = 'NO';
    }
    result.push(answer);
  }
  return result.join('\n');
}
console.log(solution(T, input));
