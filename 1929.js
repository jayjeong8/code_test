const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, B] = input;
const primeNumbers=[2,3,5,7];
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
}

