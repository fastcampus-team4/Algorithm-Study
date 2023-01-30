// https://www.acmicpc.net/problem/18258
const filePath = process.platform === 'linux' ? 0 : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());

// shift는 O(n)의 시간복잡도를 가지므로 시간초과가 났음
// 방법 1 : 직접 큐를 구현하기
// 방법 2 : 아래의 방법처럼 pop에서 굳이 list를 제거하지 말고 가리키는 부분을 +1씩 해줄것

function solution(n, input) {
  let queue = [];
  let answer = [];
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    const command = input[i].split(' ')[0].toString().trim();
    switch (command) {
      case 'push':
        let pushEl = input[i].split(' ')[1];
        queue.push(pushEl);
        break;
      case 'pop':
        if (queue.length - cnt === 0) {
          answer.push(-1);
        } else {
          answer.push(queue[cnt]);
          cnt++;
        }
        break;
      case 'size':
        answer.push(queue.length - cnt);
        break;
      case 'empty':
        answer.push(queue.length - cnt === 0 ? 1 : 0);
        break;
      case 'front':
        answer.push(queue.length - cnt === 0 ? -1 : queue[cnt]);
        break;
      case 'back':
        answer.push(queue.length - cnt === 0 ? -1 : queue[queue.length - 1]);
        break;
      default:
        break;
    }
  }
  return answer.join('\n');
}

console.log(solution(N, input));
