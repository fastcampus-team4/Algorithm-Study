const filePath = process.platform === 'linux' ? 0 : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// const answer = [];
// const queue = [];

// for (let i = 1; i < input.length; i++) {
//   const [x, y] = input[i].trim().split(' ');
//   switch (x) {
//     case 'push':
//       queue.push(y);
//       break;
//     case 'front':
//       queue.length === 0 ? answer.push(-1) : answer.push(queue[0]);
//       break;
//     case 'back':
//       queue.length === 0
//         ? answer.push(-1)
//         : answer.push(queue[queue.length - 1]);
//       break;
//     case 'size':
//       answer.push(queue.length);
//       break;
//     case 'empty':
//       queue.length === 0 ? answer.push(1) : answer.push(0);
//       break;
//     case 'pop':
//       queue.length === 0 ? answer.push(-1) : answer.push(queue.shift());
//       break;
//   }
// }

// console.log(answer.join('\n'));

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
    let nodeQueue = new NodeQueue(value);
    if (this.size === 0) {
      this.head = nodeQueue;
    } else {
      this.tail.next = nodeQueue;
    }
    this.tail = nodeQueue;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      return -1;
    }
    let value = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return value;
  }

  isEmpty() {
    if (this.size === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  whatSize() {
    return this.size;
  }

  front() {
    if (this.size === 0) {
      return -1;
    } else {
      return this.head.value;
    }
  }

  back() {
    if (this.size === 0) {
      return -1;
    } else {
      return this.tail.value;
    }
  }
}
let queue = new Queue();
const answer = [];
for (let i = 1; i < input.length; i++) {
  const [x, y] = input[i].trim().split(' ');
  switch (x) {
    case 'push':
      queue.push(y);
      break;
    case 'front':
      answer.push(queue.front());
      break;
    case 'back':
      answer.push(queue.back());
      break;
    case 'size':
      answer.push(queue.whatSize());
      break;
    case 'empty':
      answer.push(queue.isEmpty());
      break;
    case 'pop':
      answer.push(queue.pop());
      break;
  }
}
console.log(answer);
