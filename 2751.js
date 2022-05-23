const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

console.log(input.sort((a,b)=> a-b).join('\n'));