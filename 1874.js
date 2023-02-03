// https://www.acmicpc.net/problem/1874
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(Number);

const [n, ...nums] = input;

function solution(n, nums) {
  let stack = [];
  let answer = [];
  let number = 1;

  for (let i = 0; i < nums.length; i++) {
    while (number <= nums[i]) {
      stack.push(number);
      answer.push('+');
      number++;
    }

    let stackPop = stack.pop();
    answer.push('-');

    if (stackPop !== nums[i]) {
      answer = ['NO'];
      break;
    }
  }

  return answer.join('\n');
}
console.log(solution(n, nums));
