const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const stack = [];
const answer = [];
for (let i = 1; i < input.length; i++) {
  if (input[i].includes('push')) {
    stack.push(input[i].trim().split(' ')[1]);
  } else if (input[i].includes('top')) {
    stack.length === 0 ? answer.push(-1) : answer.push(stack[stack.length - 1]);
  } else if (input[i].includes('size')) {
    answer.push(stack.length);
  } else if (input[i].includes('empty')) {
    stack.length === 0 ? answer.push(1) : answer.push(0);
  } else if (input[i].includes('pop')) {
    stack.length === 0 ? answer.push(-1) : answer.push(stack.pop());
  }
}
console.log(answer.join('\n'));
