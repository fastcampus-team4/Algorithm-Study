const filePath = process.platform === 'linux' ? 0 : './input.txt';
let arr = require('fs').readFileSync(filePath).toString().trim().split('');

console.log(arr);
// 아직 푸는 중 .. ㅠㅠ
// const solution = (arr) => {
//   const stack = [];
//   let answer = '';
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '(') {
//       stack.push('(');
//     } else if (arr[i] === ')') {
//       if (stack.length && stack[stack.length - 1] === '(') {
//         answer += stack.pop();
//       }
//     } else if (arr[i] === '*' || arr[i] === '/') {
//     } else if (arr[i] === '+' || arr[i] === '-') {
//       if (stack[stack.length] === '(') {
//       }
//     } else {
//       stack.push(arr[i]);
//     }
//   }
// };
// solution(arr);
