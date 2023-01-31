const filePath = process.platform === 'linux' ? 0 : './input.txt';
const [N, K] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const array = [...new Array(N)].map((v, i) => i + 1);

let answer = [];
while (array.length !== 0) {
  for (let i = 1; i < K; i++) {
    array.push(array.shift());
  }
  answer.push(array.shift());
}
console.log(`<${answer.join(', ')}>`);
