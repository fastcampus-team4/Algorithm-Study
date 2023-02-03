// https://www.acmicpc.net/problem/2504
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');
input;
function solution(input) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[') {
      stack.push(input[i]);
    }
    if (input[i] === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
        stack.push(2);
      } else if (stack[stack.length - 1] !== '[' && stack[stack.length - 2] === '(') {
        const x = stack.pop();
        stack.pop();
        stack.push(x * 2);
      } else {
        return answer;
      }
    }

    if (input[i] === ']') {
      if (input[i - 1] === '[') {
        stack.pop();
        stack.push(3);
      } else if (stack[stack.length - 1] !== '(' && stack[stack.length - 2] === '[') {
        const popNumber = stack.pop();
        stack.pop();
        stack.push(popNumber * 3);
      } else {
        return answer;
      }
    }

    if (typeof stack[stack.length - 1] === 'number' && typeof stack[stack.length - 2] === 'number') {
      const num = stack[stack.length - 1] + stack[stack.length - 2];
      stack.pop();
      stack.pop();
      stack.push(num);
    }
  }

  if (stack.length !== 1 || typeof stack[0] !== 'number') {
    answer = 0;
  } else {
    answer = stack[0];
  }

  return answer;
}
console.log(solution(input));
