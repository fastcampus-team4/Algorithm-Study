const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("");

console.log(input);

const stack = [];
const answer = [];
let result = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === "(") {
    stack.push("(");
  } else {
    stack.pop();
    if (input[i - 1] === "(") {
      result += stack.length;
      console.log(result);
    } else {
      result += 1;
    }
  }
}

console.log(result);
