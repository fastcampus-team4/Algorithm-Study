// https://www.acmicpc.net/problem/1966

// 구글링 정답
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; // 리눅스로 테스트할 땐 따로 설정해주어야 합니다.
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [n, ...testcases] = input;

// 문제 풀이
function solution(n, testcases) {
  for (let i = 0; i < n; i += 1) {
    let count = 1;
    let M = Number(testcases[i * 2].split(" ")[1]);
    const queue = testcases[i * 2 + 1].split(" ").map((i) => Number(i));

    while (1) {
      const shiftItem = queue.shift();
      if (Math.max(...queue) <= shiftItem && M === 0) {
        console.log(count);
        break;
      } else if (Math.max(...queue) > shiftItem && M === 0) {
        queue.push(shiftItem);
        M = queue.length - 1;
      } else if (Math.max(...queue) > shiftItem) {
        queue.push(shiftItem);
        M -= 1;
      } else if (Math.max(...queue) <= shiftItem) {
        count += 1;
        M -= 1;
      }
    }
  }
}

// 제출
solution(n, testcases);

// 내 답 문제에 중요도가 같으면 어떻게 하라는지 나오지 않아서 못 품
// const filePath = process.platform === "linux" ? 0 : "./input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => i.trim().split(" ").map(Number));

// let cnt = 1;
// const answer = [];

// for (let i = 0; i < input[0]; i++) {
//   const [test, important] = [input[i + cnt], input[i + cnt + 1]];
//   const m = important[test[1]];
//   const order = [];
//   let num = 0;
//   let ans = 0;

//   for (let j = 0; j < test[0]; j++) {
//     order.push([num, important[j]]);
//     num++;
//   }

//   const s = order.sort((a, b) => b[1] - a[1], 0);

//   for (let k = 0; k < order.length; k++) {
//     if (order[k][1] !== m) {
//       ans++;
//     } else break;
//   }

//   answer.push(ans + 1);

//   cnt++;
// }

// console.log(answer.join("\n"));
