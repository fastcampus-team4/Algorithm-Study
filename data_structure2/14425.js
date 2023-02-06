const filePath = process.platform === 'linux' ? 0 : './input.txt';
let arr = require('fs').readFileSync(filePath).toString().trim().split('\n');

const solution = (arr) => {
  const [N, M] = arr[0].trim().split(' ').map(Number);
  const map = new Map();
  let answer = 0;
  for (let i = 1; i < N + 1; i++) {
    map.set(arr[i].trim(), 1);
  }
  const question = arr.slice(N + 1).map((v) => v.trim());
  for (let i = 0; i < M; i++) {
    map.get(question[i]) ? answer++ : null;
  }

  return answer;
};

console.log(solution(arr));
