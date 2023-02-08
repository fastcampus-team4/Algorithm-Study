const filePath = process.platform === 'linux' ? 0 : './input.txt';
let arr = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((element) => element.trim());

const solution = (arr) => {
  const set = new Set(arr);
  const map = new Map();
  for (let x of arr) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  const answer = Array.from(set)
    .sort()
    .map((value) => {
      return `${value} ${((map.get(value) / arr.length) * 100).toFixed(4)}`;
    });
  return answer.join('\n');
};

console.log(solution(arr));
