// 쇠막대기 : https://www.acmicpc.net/problem/10799

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer++; // 닫는 괄호를 만났는데 앞에 여는 괄호가 아니면 레이저가 아니라 막대기의 끝이니까 하나 카운팅
      }
    } else stack.push(s[i]);
  }

  return answer;
}

console.log(solution(input));
