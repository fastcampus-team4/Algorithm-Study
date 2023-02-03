// https://www.acmicpc.net/problem/1935

/**
 * 1. 숫자는 스택에 그냥 추가한다.
 * 2. 연산자가 나오면 숫자 2개를 pop 해서 계산한다.
 * 3. 이때 먼저 pop 되는 숫자가 두 번째 값, 나중에 pop되는 숫자가 첫 번째 값으로 하여 계산해야 한다. 계산한 값은 다시 스택에 넣는다.
 */
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, postfix, ...nums] = input;
const numbers = nums.map(Number);

function solution(n, postfix, numbers) {
  let stack = [];
  const numberObj = {};
  let startCode = 65;
  const calculator = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  for (let i = 0; i < n; i++) {
    numberObj[String.fromCharCode(startCode)] = numbers[i];
    startCode++;
  }

  const transformPostfix = postfix
    .split('')
    .map((value) => (Object.keys(numberObj).includes(value) ? numberObj[value] : value));

  for (let i = 0; i < transformPostfix.length; i++) {
    let pushItem = transformPostfix[i];
    if (!Object.values(numberObj).includes(pushItem)) {
      const secondItem = stack.pop();
      const firstItem = stack.pop();
      const command = calculator[pushItem];
      pushItem = command(firstItem, secondItem);
    }
    stack.push(pushItem);
  }
  return (Math.floor(stack[0] * 100) / 100).toFixed(2);
}

console.log(solution(N, postfix, numbers));
