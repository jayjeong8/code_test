const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, B] = input;

let ans = [];

for (let i = A; i <= B; i++) {
    let isPrime = true;
    if (i === 1) isPrime = false;

    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) ans.push(i);
}


console.log(ans.join('\n'));


//예전 풀이
/*const primeNumbers=[2,3,5,7];
for (let i=A; i<=B; i++){
    if(primeNumbers.includes(i)){
        console.log(i)
    }
    if(i%2!==0 && !primeNumbers.includes(i)){
        for(let j=3; j<=i; j+=2){
            if(i%j===0){
                break;
            }
            if(j*j > i){
                console.log(i);
                break;
            }
        }
    }
}*/

