const input = require('fs').readFileSync('/dev/stdin');

const N = Number(input);

function fibonacci(n){
    if(n<2) return n;
    return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(N));