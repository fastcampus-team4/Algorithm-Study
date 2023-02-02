const filePath = process.platform === 'linux' ? 0 : './input.txt';
const array = require('fs').readFileSync(filePath).toString().trim().split('');

const stack = [];
let answer = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === '(') {
    stack.push('(');
  } else {
    stack.pop();
    if (array[i - 1] === '(') {
      answer += stack.length;
    } else {
      answer += 1;
    }
  }
}
console.log(answer);
