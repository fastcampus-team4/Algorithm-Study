// 스택 수열 : https://www.acmicpc.net/problem/1874
// 문제 설명 : 1~n 까지의 숫자로 입력에 있는 수열을 만드는 것, 예를 들어 수열의 첫번째 수가 4일 때 스택에 1234 를 넣고 4가 나왔으니 4를 빼준다. 주의! 수열의 다음 숫자가 나올 때까지 스택에 넣어줄 때 스택에 넣었던 최대 숫자를 기억할 것(만약 수열의 다음 수가 3일 경우 스택에서 뺐으니 3부터 다시 스택에 넣어서 그 다음 수가 나올 때까지 기다리는 것이 아니라 5부터 스택에 넣는 것)
// 참고 : https://www.youtube.com/watch?v=byCxMbgzEVM

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

const N = input[0];
const ans = [];
let nums = [];
let stack = [];

for (let i = 1; i <= N; i++) {
  nums.push(i);
}

for (let j = 1; j <= N; j++) {
  let max = 1;

  while (max <= N && stack[stack.length - 1] != input[j]) {
    stack.push(nums.shift());
    ans.push("+");
    max++;
  }

  if (stack[stack.length - 1] == input[j]) {
    stack.pop();
    ans.push("-");
  } else {
    ans.push("NO");
    break;
  }
}
console.log(ans.indexOf("NO") !== -1 ? "NO" : ans.join("\n"));
