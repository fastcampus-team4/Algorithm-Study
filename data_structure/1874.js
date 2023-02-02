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
// let cnt = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max && max !== Math.max(...array)) {
//     answer.push('+'.repeat(array[i] - max));
//     answer.push('-');
//     max = array[i];
//     cnt++;
//   } else if (array[i] < max && max !== Math.max(...array)) {
//     if (array[i] !== array[i-1] - 1) {
//       console.log('NO', i);
//       return;
//     } else {
//       answer.push('-');
//       cnt++;
//     }
//   } else {
//     if (array[i] > array[i - 1]) {
//       console.log('NO');
//       return;
//     } else {
//       answer.push('-');
//       cnt++;
//     }
//   }
// }
// if (cnt === n) {
//   console.log(answer.join('').split('').join('\n'));
// } else {
//   console.log('NO');
// }
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
