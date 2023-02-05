const filePath = process.platform === 'linux' ? 0 : './input.txt';
let [N, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = input.map((v) => v.trim().split(' ').map(Number));
// console.log(arr);

const solution = (arr) => {
  const points = [];
  arr.forEach(([x, r], i) => {
    points.push([x - r, '(', i]);
    points.push([x + r, ')', i]);
  });
  points.sort((a, b) => a[0] - b[0]);
  console.log(points);
  const stack = [];
  for (let i = 0; i < points.length; i++) {
    if (points[i][1] === '(') {
      stack.push(points[i][2]);
    } else {
      if (stack[stack.length - 1] === points[i][2]) {
        stack.pop();
      } else {
        return 'NO';
      }
    }
  }
  if (stack.length === 0) {
    return 'YES';
  } else {
    return 'NO';
  }
};

console.log(solution(arr));
