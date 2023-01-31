const filePath =
  process.platform === "linux"
    ? 0
    : "/Users/gimjiwon/Desktop/algorithm/input.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

const card = [];
for (let i = 0; i < N; i++) {
  card.push(i + 1);
}

while (true) {
  if (card.length === 1) {
    break;
  } else {
    card.shift();
    card.push(card.shift());
  }
}

console.log(card[0]);
//시간초과

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.length++;

    return newNode;
  }

  getHead() {
    // 첫 노드(head) 가져오기
    return this.head.val;
  }

  removeHead() {
    // 첫 노드(head)를 연결리스트에서 지우기
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getLength() {
    // 연결리스트의 길이 알기
    return this.length;
  }
}

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
  cards.push(i);
}

while (cards.getLength() !== 1) {
  // 길이가 0 이 아니라면.
  cards.removeHead(); // 맨 앞 노드를 지우고
  cards.push(cards.getHead()); // 맨 앞 노드를 맨뒤로 붙이고
  cards.removeHead(); // 다시 맨 앞 노드를 지우고
}
console.log(cards.getHead());
