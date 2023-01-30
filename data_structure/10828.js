const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());

function solution(N, input) {
  const stack = new Array();
  const answer = new Array();
  for (let i = 0; i < N; i++) {
    const command = input[i].split(' ')[0];
    switch (command) {
      case 'push':
        const pushEl = input[i].split(' ')[1];
        stack.push(pushEl);
        break;
      case 'pop':
        answer.push(stack.length === 0 ? -1 : Number(stack.pop()));
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length === 0 ? 1 : 0);
        break;
      case 'top':
        answer.push(stack.length === 0 ? -1 : Number(stack[stack.length - 1]));
        break;
      default:
        break;
    }
  }
  return answer.join('\n');
}
console.log(solution(N, input));
