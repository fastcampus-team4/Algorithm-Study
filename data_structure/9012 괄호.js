const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

array.shift();
let answer = [];

array.forEach((string) => {
  const stack = [];
  for (let x of string) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(x);
      }
    }
  }

  if (stack.length === 0) {
    answer.push("YES");
  } else {
    answer.push("NO");
  }
});

console.log(answer.join("\n"));
