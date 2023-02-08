// 프린터 큐
const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

for (let i = 1; i < input.length; i += 2) {
  const [N, M] = input[i].trim().split(' ').map(Number);
  const arr = input[i + 1].trim().split(' ').map(Number);
  console.log(solution(M, arr));
}

function solution(M, arr) {
  let answer = 0;
  while (arr.length > 0) {
    if (arr[0] < Math.max(...arr)) {
      arr.push(arr.shift());
      M === 0 ? (M = arr.length - 1) : M--;
    } else {
      answer++;
      arr.shift();
      if (M === 0) {
        return answer;
      } else {
        M--;
      }
    }
  }
  return answer;
}
