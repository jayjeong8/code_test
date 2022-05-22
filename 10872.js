const input = require('fs').readFileSync('/dev/stdin');

const N = Number(input);

function factorial (n){
    if(n===1 || n===0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(N));
