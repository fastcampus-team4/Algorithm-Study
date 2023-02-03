// https://www.acmicpc.net/problem/2800
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('');

const solution = (str) => {
  const stack = [];
  const brackets = [];
  const result = new Set();
  const selected = new Array(str.length).fill(true);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push(i);
    else if (str[i] === ')') brackets.push([stack.pop(), i]);
  }

  function DFS(idx, cnt) {
    if (idx === brackets.length) {
      if (cnt > 0) {
        let temp = '';
        for (let i = 0; i < str.length; i++) {
          if (selected[i]) temp += str[i];
        }
        result.add(temp);
      }
      return;
    }

    DFS(idx + 1, cnt);
    selected[brackets[idx][0]] = false;
    selected[brackets[idx][1]] = false;

    DFS(idx + 1, cnt + 1);
    selected[brackets[idx][0]] = true;
    selected[brackets[idx][1]] = true;
  }
  DFS(0, 0);
  return [...result].sort().reduce((acc, cur) => acc + cur + '\n', '');
};

console.log(solution(input));
