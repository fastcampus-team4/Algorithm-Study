const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const input = require("fs").readFileSync(filePath).toString().trim().split("");

let stack = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "(" || input[i] === "[") {
    stack.push(input[i]);
  }

  if (input[i] === ")") {
    if (stack[stack.length - 1] === "(") {
      stack.pop();
      stack.push(2);
    } else if (
      stack[stack.length - 1] !== "[" &&
      stack[stack.length - 2] === "("
    ) {
      const num = stack.pop();
      stack.pop();
      stack.push(2 * num);
    } else {
      console.log(0);
      return;
    }
  }

  if (input[i] === "]") {
    if (stack[stack.length - 1] === "[") {
      stack.pop();
      stack.push(3);
    } else if (
      stack[stack.length - 1] !== "(" &&
      stack[stack.length - 2] === "["
    ) {
      const num = stack.pop();
      stack.pop();
      stack.push(3 * num);
    } else {
      console.log(0);
      return;
    }
  }

  if (
    typeof stack[stack.length - 1] === "number" &&
    typeof stack[stack.length - 2] === "number"
  ) {
    const addNum = stack[stack.length - 1] + stack[stack.length - 2];
    stack.pop();
    stack.pop();
    stack.push(addNum);
  }
}

if (stack.length !== 1 || typeof stack[0] !== "number") {
  console.log(0);
} else {
  console.log(stack[0]);
}
