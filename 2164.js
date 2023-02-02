// https://www.acmicpc.net/problem/2164
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);

// 1. 해당 방법 시간초과 나옴
// function solution(n) {
//   let queue = [];
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     queue.push(i + 1);
//   }

//   while (queue.length) {
//     queue.shift();
//     queue.push(queue.shift());
//     if (queue.length === 1) answer = queue.shift();
//   }
//   return answer;
// }

// 2. 계산상 맞는데 틀렸다고 나옴 대체 왜..?
// function solution(n) {
//   let queue = [];
//   let cnt = 0;
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     queue.push(i + 1);
//   }

//   while (queue.length) {
//     cnt++;
//     queue.push(queue[cnt]);
//     cnt++;
//     if (queue[queue.length - 1] === queue[queue.length - 2]) {
//       answer = queue.pop();
//       break;
//     }
//   }
//   return answer;
// }

// 단일 연결리스트 노드 기본 구조
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// 연결리스트 기본 구조
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

const cards = new LinkedList();

for (let i = 1; i <= N; i++) {
  cards.add(i);
}
console.log(cards);
while (cards.getSize() !== 1) {
  cards.removeHead();
  cards.add(cards.getHead());
  cards.removeHead();
}

console.log(cards.getHead());

// LinkedList { head: null, tail: null, _size: 0 }
// //
// LinkedList { 
//   head: Node { value: 1, next: null, prev: null },
//   tail: Node { value: 1, next: null, prev: null },
//   _size: 1 }
// //
// LinkedList { 
//   head: Node { value: 1, next: Node { value: 2, next: null, prev: [Circular] }, prev: null },
//   tail: Node { value: 2, next: null, prev: Node { value: 1, next: [Circular], prev: null } },
//   _size: 2 
// }
// //
// LinkedList { 
//   head: 
//     Node { value: 1,
//       next: 
//       Node { value: 2,
//         next: Node { value: 3, next: null, prev: [Circular] },
//         prev: [Circular] },
//       prev: null },
//   tail: 
//     Node { value: 3,
//       next: null,
//       prev: 
//       Node { value: 2,
//         next: [Circular],
//         prev: Node { value: 1, next: [Circular], prev: null } } },
//   _size: 3 
// }
// //
// LinkedList { 
//   head: 
//     Node { value: 1,
//       next: 
//       Node { value: 2,
//         next: 
//           Node { value: 3,
//             next: 
//             Node { value: 4,
//               next: Node { value: 5, next: [Object], prev: [Circular] },
//               prev: [Circular] },
//             prev: [Circular] },
//         prev: [Circular] },
//       prev: null },
//   tail: 
//     Node { value: 6,
//       next: null,
//       prev: 
//       Node { value: 5,
//         next: [Circular],
//         prev: 
//           Node { value: 4,
//             next: [Circular],
//             prev: 
//             Node { value: 3,
//               next: [Circular],
//               prev: Node { value: 2, next: [Circular], prev: [Object] } } } } },
//   _size: 6 
// }