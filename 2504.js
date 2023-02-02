const filePath = process.platform === 'linux' ? 0 : './input.txt';
let array = require('fs').readFileSync(filePath).toString().trim().split('');

let stack = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] === '(' || array[i] === '[') {
    stack.push(array[i]);
  }
  if (array[i] === ')') {
    if (stack[stack.length - 1] === '(') {
      stack.pop();
      stack.push(2);
    } else if (
      stack[stack.length - 1] !== '[' &&
      stack[stack.length - 2] === '('
    ) {
      const x = stack.pop();
      stack.pop();
      stack.push(x * 2);
    } else {
      console.log(0);
      return;
    }
  }
  if (array[i] === ']') {
    if (stack[stack.length - 1] === '[') {
      stack.pop();
      stack.push(3);
    } else if (
      stack[stack.length - 1] !== '(' &&
      stack[stack.length - 2] === '['
    ) {
      const x = stack.pop();
      stack.pop();
      stack.push(x * 3);
    } else {
      console.log(0);
      return;
    }
  }

  if (
    typeof stack[stack.length - 1] === 'number' &&
    typeof stack[stack.length - 2] === 'number'
  ) {
    const num = stack[stack.length - 1] + stack[stack.length - 2];
    stack.pop();
    stack.pop();
    stack.push(num);
  }
}

if (stack.length !== 1 || typeof stack[0] !== 'number') {
  console.log(0);
} else {
  console.log(stack[0]);
}