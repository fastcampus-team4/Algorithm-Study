// https://www.acmicpc.net/problem/1935

// 못품
let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

const nums = [...input[1]];

let ans = nums.shift();
let ansArr = [];

ansArr.push(input[1].indexOf(ans) + 1);

while (nums.length !== 1) {
  if (ans > 0) {
    for (let i = 1; i <= ans; i++) {
      nums.push(nums.shift());
    }
    ans = nums.shift();
    console.log(ans);
    ansArr.push(input[1].indexOf(ans) + 1);
  } else {
    for (let i = 1; i >= ans; i--) {
      nums.unshift(nums.pop());
    }
    ans = nums.shift();
    console.log(ans);
    ansArr.push(input[1].indexOf(ans) + 1);
  }
}

console.log(ansArr);
