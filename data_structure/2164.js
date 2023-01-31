const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input)
console.log(N)
let cards = [];

for(let i = 1; i <= N; i++) {
    cards.push(i)
}
console.log(cards)

while(true) {
    if(cards.length === 1) {
        break;
    } else {
        cards.shift()
        cards.push(cards.shift())
    }
}

console.log(cards[0])

