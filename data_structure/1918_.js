const filePath = process.platform === 'linux' ? 0 : './input.txt';
let arr = require('fs').readFileSync(filePath).toString().trim().split('');

const solution = (arr) => {
  const stack = [];
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      //'('이 들어오면 바로 스택에 푸시
      stack.push('(');
    } else if (arr[i] === ')') {
      // ')'이 들어오고 스택에 뭐가들어오면 '('이 나올떄까지 다 팝해서 answer에 더해줌, 마지막 스택에 '('까지 없애줌
      while (stack.length && stack[stack.length - 1] !== '(') {
        answer += stack.pop();
      }
      stack.pop();
    } else if (arr[i] === '*' || arr[i] === '/') {
      // 곱하기나누기 들어왔는데,
      // 스택에 곱하기 나누기가 이미 위에있을때 먼저 팝
      while (
        (stack.length && stack[stack.length - 1] === '*') ||
        stack[stack.length - 1] === '/'
      ) {
        answer += stack.pop();
      }
      // 스택비었거나, 스택안에 괄호, 덧셈뺄셈만 남아있으면 미루고 */ 푸시
      stack.push(arr[i]);
    } else if (arr[i] === '+' || arr[i] === '-') {
      // 덧셈뺄셈 만났는데,
      // 스택에 뭐가있으면 괄호열림있을때까지 다 팝
      while (stack.length && stack[stack.length - 1] !== '(') {
        answer += stack.pop();
      }
      // 다비우고 +- 푸시
      stack.push(arr[i]);
    } else {
      // 문자가 들어오면 바로 answer에 더해줌
      answer += arr[i];
    }
  }
  while (stack.length > 0) {
    answer += stack.pop();
  }
  return answer;
};
console.log(solution(arr));
