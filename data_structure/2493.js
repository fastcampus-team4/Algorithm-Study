const filePath = process.platform === 'linux' ? 0 : './input.txt';
let [N, arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const top = arr.split(' ').map(Number);

// 시간 초과
// const solution = (top) => {
//   const answer = [0];
//   let max = top[0];
//   for (let i = 1; i < top.length; i++) {
//     let flag = false;
//     for (let j = i - 1; j >= 0; j--) {
//       if (top[i] > max) {
//         answer.push(0);
//         max = top[i];
//         break;
//       }
//       if (top[j] > top[i]) {
//         flag = true;
//         answer.push(j + 1);
//         break;
//       }
//     }
//   }
//   return answer.join(' ');
// };

// 2중for문쓰면 시간초과나서 스택을 이용해서 풀어야함.
// 스택에 각 탑에서의 peek지점을 갱신하면서 for문한번으로 끝내야함.
const solution = (N, top) => {
  const stack = [];
  stack.push([1, top[0]]);
  const answer = [0];
  for (let i = 1; i < N; i++) {
    if (top[i - 1] > top[i]) {
      answer.push(i);
      if (stack[stack.length - 1][1] !== top[i - 1]) {
        stack.push([i, top[i - 1]]);
      }
    } else {
      while (stack.length > 0) {
        if (stack[stack.length - 1][1] > top[i]) {
          answer.push(stack[stack.length - 1][0]);
          break;
        } else {
          stack.pop();
        }
      }
      if (stack.length === 0) {
        answer.push(0);
        stack.push([i + 1, top[i]]);
      }
    }
  }
  return answer.join(' ');
};
console.log(solution(Number(N), top));
