const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

//2보다 큰 모든 짝수는 두개의 소수 합으로 이루어져있다.

//짝수 2도 소수

//수 안에 포함된 소수를 전부 구해보기
const Nums = input.slice(1);
const max = Math.max(...Nums);
let primeNums = [];
let n=3;
while(n <= max){
    for(let j=3; j<=n; j+=2){
        if(n/j===1){
            primeNums.push(n);
            break;
        }
        if(n%j===0) {
            break;
        }
    }
    n+=2;
}
for(let i = 1; i<=input[0]; i++){
    if(input[i]===4){
        console.log(2,2);
        continue;
    }
//소수 쌍 구하기
    let primeDuo = [];
    for(let j=0; primeNums[j] < input[i]/2+1; j++){
        const index = primeNums.indexOf(input[i] - primeNums[j]);
        if(index !== -1){ //소수 확인 조건문
            primeDuo.push([primeNums[j],primeNums[index]]);
        }
    }
    if(primeDuo.length){
        const result = primeDuo.pop();
        console.log(result[0],result[1]);
    }
}