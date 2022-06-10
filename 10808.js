const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('');

const alphabet = new Array(26).fill(0);

input.forEach(a => {
    alphabet[a.charCodeAt(0)-97]++;
})

console.log(alphabet.join(' '));