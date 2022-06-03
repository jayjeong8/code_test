const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let result = '';
for(let i=1; i<=input[0]; i++){
    const word = input[i].split(' ').map(word => word.split('').reverse().join(''))
    result += word.join(' ') + '\n'
}

console.log(result);