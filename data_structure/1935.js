const filePath = process.platform === 'linux' ? 0 : './input.txt';
const [N, exp, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const cha = new Map();
for (let i = 0; i < N; i++) {
  cha.set(String.fromCharCode(i + 65), Number(arr[i]));
}
const stack = [];

for (let i = 0; i < exp.trim().length; i++) {
  if (/[A-Z]/.test(exp[i])) {
    stack.push(cha.get(exp[i]));
  } else {
    const right = stack.pop();
    const left = stack.pop();
    stack.push(eval(`${left}${exp[i]}${right}`));
  }
}
console.log(stack[0].toFixed(2));
