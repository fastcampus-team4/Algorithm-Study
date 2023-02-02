const filePath = process.platform === 'linux' ? 0 : './input.txt';
const N = Number(require('fs').readFileSync(filePath).toString().trim());

const array = [...new Array(N)].map((v, i) => i + 1);

// 메모리 초과
// while (queue.length !== 2) {
//   let temp = [];
//   for (let i = 2; i < queue.length; i++) {
//     temp.push(queue[i]);
//   }
//   temp.push(queue[1]);
//   queue = temp;
// }

// function solution(n) {
//   let queue = [];
//   let cnt = 0;
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     queue.push(i + 1);
//   }
//   console.log(queue);
//   while (queue.length > 1) {
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
// console.log(solution(N));

class NodeQueue {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const nodeQueue = new NodeQueue(value);
    if (this.size === 0) {
      this.head = nodeQueue;
    } else {
      this.tail.next = nodeQueue;
    }
    this.tail = nodeQueue;
    this.size++;
  }

  shift() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
}
const queue = new Queue();
array.map((value) => queue.push(value));

while (queue.size !== 1) {
  queue.shift();
  queue.push(queue.shift());
}
console.log(queue.head.value);
