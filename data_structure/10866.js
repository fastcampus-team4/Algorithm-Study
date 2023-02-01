const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const deck = [];
const answer = [];
for (let i = 1; i < input.length; i++) {
    const [command, x] = input[i].trim().split(' ');
    switch (command) {
        case 'push_front':
            deck.unshift(x);
            break;
        case 'push_back':
            deck.push(x);
            break;
        case 'pop_front':
            deck.length === 0 ? answer.push(-1) : answer.push(deck.shift());
            break;
        case 'pop_back':
            deck.length === 0 ? answer.push(-1) : answer.push(deck.pop());
            break;
        case 'size':
            answer.push(deck.length);
            break;
        case 'empty':
            deck.length === 0 ? answer.push(1) : answer.push(0);
            break;
        case 'front':
            deck.length === 0 ? answer.push(-1) : answer.push(deck[0]);
            break;
        case 'back':
            deck.length === 0 ? answer.push(-1) : answer.push(deck[deck.length - 1]);
            break;
    }
}

console.log(answer.join('\n')); 