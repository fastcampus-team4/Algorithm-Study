// 큐 2 : https://www.acmicpc.net/problem/18258

/* 구글링 답 */
// shift 의 경우 시간복잡도를 높이기 때문에 XX
let filePath = process.platform === "linux" ? 0 : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  createNode(value, prev, next) {
    return {
      value,
      prev,
      next,
    };
  }

  push(value) {
    const curNode = this.createNode(value, this.tail, this.head);
    if (this.head) {
      this.tail.next = curNode;
      this.head.prev = curNode;
      this.tail = curNode;
    } else {
      this.head = curNode;
      this.tail = curNode;
      curNode.prev = curNode;
      curNode.next = curNode;
    }
    this.size++;
  }

  pop() {
    if (this.size > 2) {
      const value = this.head.value;
      const newHead = this.head.next;
      this.head = newHead;
      newHead.prev = this.tail;
      this.tail.next = this.head;
      this.size--;
      return value;
    } else if (this.size === 2) {
      const value = this.head.value;
      this.head = this.tail;
      this.tail.prev = this.tail;
      this.tail.next = this.tail;
      this.size--;
      return value;
    } else if (this.size === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    } else {
      return -1;
    }
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.value : -1;
  }

  back() {
    return this.tail ? this.tail.value : -1;
  }
}

const myQueue = new Queue();
const output = [];

for (let i = 1; i < input.length; i++) {
  const [command, value] = input[i].split(" ");
  switch (command) {
    case "push":
      myQueue.push(value);
      break;
    case "pop":
      output.push(myQueue.pop());
      break;
    case "size":
      output.push(myQueue.size);
      break;
    case "empty":
      output.push(myQueue.empty());
      break;
    case "front":
      output.push(myQueue.front());
      break;
    case "back":
      output.push(myQueue.back());
      break;
  }
}
console.log(output.join("\n"));

/* 구글링 답 2 */

// const fs = require("fs");
// const readFileSyncAddress = "/dev/stdin";
// const input = fs
//   .readFileSync(readFileSyncAddress)
//   .toString()
//   .trim()
//   .split("\n");

// const [n, ...commands] = input;

// class Node {
//   constructor(item) {
//     this.item = item;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   push(item) {
//     const node = new Node(item);
//     if (!this.head) {
//       this.head = node;
//       this.head.next = this.tail;
//     } else {
//       this.tail.next = node;
//     }

//     this.tail = node;
//     this.size += 1;
//   }

//   getSize() {
//     return this.size;
//   }

//   pop() {
//     if (this.size > 2) {
//       const item = this.head.item;
//       const newHead = this.head.next;
//       this.head = newHead;
//       this.size -= 1;
//       return item;
//     } else if (this.size === 2) {
//       const item = this.head.item;
//       const newHead = this.head.next;
//       this.head = newHead;
//       this.tail = newHead;
//       this.size -= 1;
//       return item;
//     } else if (this.size === 1) {
//       const item = this.head.item;
//       this.head = null;
//       this.tail = null;
//       this.size -= 1;
//       return item;
//     } else {
//       return -1;
//     }
//   }

//   empty() {
//     return this.size ? 0 : 1;
//   }

//   front() {
//     return this.head ? this.head.item : -1;
//   }

//   back() {
//     return this.tail ? this.tail.item : -1;
//   }
// }

// function solution(n, commands) {
//   let answer = "";
//   const queue = new Queue();

//   for (let i = 0; i < n; i += 1) {
//     const command = commands[i].split(" ")[0];

//     switch (command) {
//       case "push":
//         const pushItem = commands[i].split(" ")[1];
//         queue.push(pushItem);
//         break;
//       case "pop":
//         answer += queue.pop() + " ";
//         break;
//       case "front":
//         answer += queue.front() + " ";
//         break;
//       case "back":
//         answer += queue.back() + " ";
//         break;
//       case "empty":
//         answer += queue.empty() + " ";
//         break;
//       case "size":
//         answer += queue.getSize() + " ";
//         break;
//       default:
//         break;
//     }
//   }

//   return answer.split(" ").join("\n");
// }

// const answer = solution(n, commands);
// console.log(answer);

/* 스택 문제 답 이용 */
// if (input[i].includes("push")) {
//   ans = input[i].split(" ")[1];
//   queue.push(ans);
// } else if (input[i].includes("pop")) {
//   if (queue.length === 0) ansArr.push(-1);
//   else {
//     ans = queue.shift();
//     ansArr.push(ans);
//   }
// } else if (input[i].includes("size")) {
//   ansArr.push(queue.length);
// } else if (input[i].includes("empty")) {
//   if (queue.length === 0) ansArr.push(1);
//   else ansArr.push(0);
// } else if (input[i].includes("front")) {
//   if (queue.length === 0) ansArr.push(-1);
//   else ansArr.push(queue[0]);
// } else if (input[i].includes("back")) {
//   if (queue.length === 0) ansArr.push(-1);
//   else ansArr.push(queue[queue.length - 1]);
// }

/* switch case 문 이용 */
// let command = input[i].split(" ")[0];

// switch (command) {
//   case "push":
//     ans = input[i].split(" ")[1];
//     queue.push(ans);
//     break;
//   case "pop":
//     if (queue.length === 0) ansArr.push(-1);
//     else {
//       ans = queue.shift();
//       ansArr.push(ans);
//     }
//     break;
//   case "size":
//     ansArr.push(queue.length);
//     break;
//   case "empty":
//     if (queue.length === 0) ansArr.push(1);
//     else ansArr.push(0);
//     break;
//   case "front":
//     if (queue.length === 0) ansArr.push(-1);
//     else ansArr.push(queue[0]);
//     break;
//   case "back":
//     if (queue.length === 0) ansArr.push(-1);
//     else ansArr.push(queue[queue.length - 1]);
//     break;
// }
