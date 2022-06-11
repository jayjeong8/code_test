const input = require('fs').readFileSync('/dev/stdin');

const N = Number(input);

function factorial (n){
    if(n===1 || n===0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(N));


/* 재귀함수가 약간 더 빠름
let ans = 1;
for(let i = 1; i <= N; i++){
    ans *= i;
}

console.log(ans)*/
