const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');

function solution(input){
  let stack = [];
  let answer = 0;
  
  for (let i = 0; i < input.length; i++){
    if (stack.length > 0 && input[i] === ')') {
      stack.pop();
      if (input[i-1] === '(') {
        answer += stack.length;
      } else {
        answer += 1;
      }
    } else {
      stack.push(input[i]);
    }
  }

  return answer
}
console.log(solution(input));