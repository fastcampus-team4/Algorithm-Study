const filePath = process.platform === 'linux' ? 0 : './input.txt';
let arr = require('fs').readFileSync(filePath).toString().trim().split('\n');

const solution = (arr) => {
  const [N, M] = arr[0].trim().split(' ').map(Number);
  const book = arr.slice(1, N + 1).map((v) => v.trim());
  const mapI = new Map();
  const mapName = new Map();
  for (let i = 0; i < N; i++) {
    mapI.set(i, book[i]);
    mapName.set(book[i], i);
  }

  const question = arr.slice(N + 1).map((v) => v.trim());
  const answer = [];
  for (let i = 0; i < M; i++) {
    answer.push(
      mapI.get(Number(question[i]) - 1)
        ? mapI.get(Number(question[i]) - 1)
        : mapName.get(question[i]) + 1
    );
  }
  return answer.join('\n');
};

console.log(solution(arr));
