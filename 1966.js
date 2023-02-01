// https://www.acmicpc.net/problem/1966

const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, ...test] = input;

// 시간초과 나옴... -> 이유를 잘 모르겠음
// const testArr = test.map((e) => e.split(' ').map(Number));
// let answer = '';

// for (let i = 0; i < testArr.length; i += 2) {
//   let cnt = 0;
//   let location = testArr[i][1];
//   const importance = testArr[i + 1];

//   while (true) {
//     const max = Math.max(...importance);
//     const num = importance.shift();
//     if (max === num) {
//       cnt++;
//       if (location === 0) {
//         answer += cnt + '\n';
//         break;
//       }
//     } else {
//       importance.push(num);
//     }

//     if (location === 0) {
//       location = importance.length - 1;
//     } else {
//       location--;
//     }
//   }
// }
// console.log(answer.trim());

function solution(n, test) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let count = 1;
    let location = Number(test[i * 2].split(' ')[1]);
    let importance = test[i * 2 + 1].split(' ').map(Number);

    while (true) {
      const shiftItem = importance.shift();
      const max = Math.max(...importance);
      if (location === 0) {
        if (max <= shiftItem) {
          // console.log(count);
          answer.push(count);
          break;
        } else {
          importance.push(shiftItem);
          location = importance.length - 1;
        }
      } else {
        if (max > shiftItem) {
          importance.push(shiftItem);
          location--;
        } else {
          count += 1;
          location -= 1;
        }
      }
    }
  }
  return answer.join('\n');
}
console.log(solution(n, test));
