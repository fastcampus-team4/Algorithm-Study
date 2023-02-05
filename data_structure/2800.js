const filePath = process.platform === 'linux' ? 0 : './input.txt';
let arr = require('fs').readFileSync(filePath).toString().trim().split('');

const solution = (arr) => {
  const stack = [];
  const brace = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stack.push(i);
    } else if (arr[i] === ')') {
      brace.push([stack.pop(), i]);
    }
  }

  const answer = new Set();
  const recur = (arr, idx) => {
    let tmpStack = [];
    if (idx < brace.length) {
      let tmp = '';
      for (let i = 0; i < arr.length; i++) {
        if (i !== brace[idx][0] && i !== brace[idx][1]) {
          tmp += arr[i];
          tmpStack.push(arr[i]);
        } else {
          tmpStack.push('');
        }
      }
      answer.add(tmp);
      recur(arr, idx + 1);
      recur(tmpStack, idx + 1);
    }
  };
  recur(arr, 0);
  return [...answer].sort().join('\n');
};

console.log(solution(arr));

// const fs = require('fs');
// const input = fs.readFileSync('input.txt').toString().trim();

// const solution1 = (str) => {
//   const stack = [];
//   const brackets = [];
//   const result = new Set();
//   const selected = new Array(str.length).fill(true);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') stack.push(i);
//     else if (str[i] === ')') brackets.push([stack.pop(), i]);
//   }
//   console.log(brackets)
//   console.log(selected)
//   const dfs = (idx, cnt) => {

//     if (idx === brackets.length) {
//       if (cnt > 0) {
//         let temp = '';
//         for (let i = 0; i < str.length; i++) {
//           if (selected[i]) temp += str[i];
//         }
//         console.log(temp)
//         result.add(temp);
//       }
//       return;
//     }
//     dfs(idx + 1, cnt);
//     selected[brackets[idx][0]] = false;
//     selected[brackets[idx][1]] = false;

//     dfs(idx + 1, cnt + 1);
//     selected[brackets[idx][0]] = true;
//     selected[brackets[idx][1]] = true;
//   };
//   dfs(0, 0);
//   return [...result].sort().reduce((acc, cur) => acc + cur + '\n', '');
// };

// console.log(solution1(input));
