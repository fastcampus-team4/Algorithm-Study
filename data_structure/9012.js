const filePath = process.platform === 'linux' ? 0 : './input.txt'
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i += 1) {
  const cases = input[i]
  const stack = []
  let result = 'YES'

  for(let j = 0; j < cases.length; j += 1) {
    if(cases[j] === '(') {
      stack.push(1)
    } else {
      if(!stack.pop()) {
        result = 'NO'
        break;
      }
    }
  }

  if(stack.length !== 0) {
    result = 'NO'
  }

  console.log(result)
}
