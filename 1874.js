const filePath = process.platform === 'linux' ? 0 : './input.txt';
const [n, ...array] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let max = 0;
const stack = [];
const answer = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    for (let j = max + 1; j <= array[i]; j++) {
      stack.push(j);
      answer.push('+');
    }
    stack.pop();
    answer.push('-');
    max = array[i];
  }
  if (array[i] < max) {
    if (stack.pop() === array[i]) {
      answer.push('-');
    } else {
      console.log('NO');
      return;
    }
  }
}
if (stack.length !== 0) {
  console.log('NO');
} else {
  console.log(answer.join('\n'));
}