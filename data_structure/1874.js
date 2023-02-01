const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let arr = []
let stack = []
let answer = '';
for(let i = 0; i < input[0]; i++) {
    arr[i] = i+1
}

for(let j = 1; j<=input[0]; j++) {
    let count= 1;
    while(count<=input[0] && stack[stack.length-1] != input[j]) {
        stack.push(arr.shift())
        answer += '+\n'
        count++
    }

    if(stack[stack.length-1] == input[j]) {
        stack.pop()
        answer += '-\n'
    } else {
        answer = 'NO'
        break
    }
}

console.log(answer)