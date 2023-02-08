const filePath = process.platform === 'linux' ? 0 : './input.txt';
let [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (parentIdx > 0 && this.heap[parentIdx] < this.heap[currentIdx]) {
      [this.heap[parentIdx], this.heap[currentIdx]] = [
        this.heap[currentIdx],
        this.heap[parentIdx],
      ];
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  pop() {
    if (this.size() === 0) {
      return 0;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    const max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    if (!this.heap[leftIdx]) return max;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] > this.heap[currentIdx]) {
        this.swap(leftIdx, currentIdx);
      }
      return max;
    }
    while (
      this.heap[currentIdx] < this.heap[leftIdx] ||
      this.heap[currentIdx] < this.heap[rightIdx]
    ) {
      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        this.swap(currentIdx, rightIdx);
        currentIdx = rightIdx;
      } else {
        this.swap(currentIdx, leftIdx);
        currentIdx = leftIdx;
      }
      leftIdx = currentIdx * 2;
      rightIdx = currentIdx * 2 + 1;
    }

    return max;
  }
}

const solution = (N, arr) => {
  const maxHeap = new MaxHeap();
  let answer = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] === 0) {
      if (maxHeap.size() === 0) {
        answer.push(0);
      } else {
        answer.push(maxHeap.pop());
      }
    } else {
      maxHeap.push(arr[i]);
    }
  }
  return answer.join('\n');
};

console.log(solution(N, arr));
