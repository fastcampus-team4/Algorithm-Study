// 괄호의 값 : https://www.acmicpc.net/problem/2504

// 모르겠음.. 다시 풀어보자
let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim();

const solution = (str) => {
  const stack = [];
  let answer = 0;
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === "(") {
      stack.push("(");
      num *= 2;
    } else if (ch === ")") {
      if (stack.length === 0) return 0;
      const top = stack.pop();
      if (top === "(") {
        if (str[i - 1] === "(") {
          answer += num;
        }
        num /= 2;
      } else {
        return 0;
      }
    } else if (ch === "[") {
      stack.push("[");
      num *= 3;
    } else if (ch === "]") {
      if (stack.length === 0) return 0;
      const top = stack.pop();
      if (top === "[") {
        if (str[i - 1] === "[") {
          answer += num;
        }
        num /= 3;
      } else {
        return 0;
      }
    }
  }
  if (stack.length !== 0) return 0;
  return answer;
};

console.log(solution(input));
