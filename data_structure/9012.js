const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const answer = [];

for (let i = 1; i < input.length; i++) {
  const stack = [];
  const arr = input[i].trim().split('');

  for (let x of arr) {
    if (x === '(') {
      stack.push(x);
    } else {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }

  stack.length === 0 ? answer.push('YES') : answer.push('NO');
}
console.log(answer.join('\n'));
