const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [caseNum, ...testCase] = array;
console.log(testCase.length);
console.log(testCase);

for (let i = 0; i < caseNum; i++) {
  let count = 0;
  const queue = testCase[2 * i + 1].split(" ").map(Number);
  let m = Number(testCase[2 * i][1]);
  while (true) {
    const shiftItem = queue.shift();
    if ((Math.max(...queue) <= shiftItem) & (m === 0)) {
      console.log(count);
      break;
    } else if (Math.max(...queue) > shiftItem && m === 0) {
      queue.push(shiftItem);
      m = queue.length - 1;
    } else if (Math.max(...queue) > shiftItem) {
      queue.push(shiftItem);
      m -= 1;
    }
  }
}

console.log(queue);
