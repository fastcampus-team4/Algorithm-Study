const filePath = process.platform === 'linux' ? 0 : './input.txt';
let [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.size();
    let parIdx = Math.floor(curIdx / 2);
    while (parIdx > 0 && this.heap[curIdx] > this.heap[parIdx]) {
      this.swap(curIdx, parIdx);
      curIdx = parIdx;
      parIdx = Math.floor(curIdx / 2);
    }
  }

  pop() {
    const max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let left = 2;
    let right = 3;

    if (!this.heap[left]) return max;
    if (!this.heap[right]) {
      if (this.heap[left] > this.heap[curIdx]) {
        this.swap(left, curIdx);
      }
      return max;
    }

    while (
      this.heap[left] > this.heap[curIdx] ||
      this.heap[right] > this.heap[curIdx]
    ) {
      if (this.heap[left] > this.heap[right]) {
        this.swap(left, curIdx);
        curIdx = left;
      } else {
        this.swap(right, curIdx);
        curIdx = right;
      }
      left = curIdx * 2;
      right = curIdx * 2 + 1;
    }

    return max;
  }
}
