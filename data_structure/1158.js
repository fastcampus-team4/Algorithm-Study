const filePath = process.platform === 'linux' ? 0 : './input.txt'
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ');

let arr = [...new Array(parseInt(N))].map((_, i) => i + 1)
const ans = []

let cnt =1;
while(arr.length) {
    let data = arr.shift()
    cnt % K === 0 ? ans.push(data) : arr.push(data)
    cnt++
}

console.log(`<${ans.join(', ')}>`)