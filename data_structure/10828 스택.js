const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";
const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const length = array.shift();

const result = [];
const stack = [];

for (let i = 0; i < length; i++) {
  const command = array[i].split(" ")[0];

  switch (command) {
    case "push":
      const num = Number(array[i].split(" ")[1]);
      stack.unshift(num);
      break;
    case "pop":
      stack.length === 0 ? result.push(-1) : result.push(stack.shift());
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      stack.length === 0 ? result.push(1) : result.push(0);
      break;
    case "top":
      stack.length === 0 ? result.push(-1) : result.push(stack[0]);
      break;
  }
}

console.log(result.join("\n"));
