// 괄호 : https://www.acmicpc.net/problem/9012

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim());

let ansArr = [];

for (let i = 1; i < input.length; i++) {
  let stack = [];
  let ans = "YES";
  for (x of input[i]) {
    if (x == ")") {
      // x 가 ) 일 경우
      if (stack.length === 0) ans = "NO"; // 뺄 것이 없으면 바로 no
      stack.pop(); // 뺄 것이 있으면 빼
    } else stack.push(x); // x 가 ( 일 경우 스택에 추가
  }
  if (stack.length > 0) ans = "NO"; // 스택이 비어있지 않으면 no

  ansArr.push(ans);
}

console.log(ansArr.join("\n"));
