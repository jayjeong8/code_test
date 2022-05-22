//브루트포스라는 것을 잊지말고 무식하게 풀어보자
//N의 반절부터 추적해도 생성자 커버가 가능한 것으로 보인다. (한자리수도 커버 가능)
//각 자리를 split해서 원래 수와 더하고, 더한 값이 입력과 같다면 원래 값을 출력한다.
const input = require('fs').readFileSync('/dev/stdin');
const N = Number(input);

let startN = Math.floor(N/2);

while(startN <= N){
    if(startN === N) return console.log(0);
    const splitN = startN.toString().split('').map(Number);
    let sum = startN;

    for(let i=0; i<splitN.length; i++){
        sum+=splitN[i];
    }

    if(sum===N) return console.log(startN);
    startN++;
}
