const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const array = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = array[0];
const K = array[1];

const people = [];
for (let i = 0; i < N; i++) {
  people.push(i + 1);
}

//배열의 첫번째 요소부터 차례대로 순회를 돌면서
//해당 요소가 K번째일 경우 answer에 넣고 아닐 경우 기존 배열의 맨 뒤에 넣는다

let answer = [];
let index = 1;
while (people.length) {
  if (index % K === 0) {
    answer.push(people.shift());
  } else {
    people.push(people.shift());
  }
  index += 1;
}

console.log(`<${answer.join(", ")}>`);
