const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('');

const alphabet = new Array(26).fill(-1);

input.forEach(a => {
    alphabet[a.charCodeAt(0)-97] = input.indexOf(a);
})

console.log(alphabet.join(' '));
