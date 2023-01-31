// 카드2 : https://www.acmicpc.net/problem/2164

let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

// 정답
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

function solution(input) {
  const cards = new LinkedList();
  for (let i = 1; i <= input; i++) {
    cards.add(i);
  }
  while (cards.getSize() !== 1) {
    cards.removeHead();
    cards.add(cards.getHead());
    cards.removeHead();
  }

  return cards.getHead();
}

input = Number(input[0]);
// const card = solution(input);
console.log(solution(input));

// 시간초과 : 시간복잡도..
// input = Number(input);

// let queue = [];
// let answer;

// for (let i = 1; i < input; i++) {
//   queue.push(i + 1);
// }

// while (queue.length) {
//   queue.push(queue.shift());
//   queue.shift();
//   if (queue.length === 1) answer = queue.shift();
// }

// console.log(answer);
