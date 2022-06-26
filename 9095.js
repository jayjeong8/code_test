//1,2,3 더하기
//1과 2와 3으로 N을 구성할 수 있는 방법의 수
//N은 11보다 작다

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
const ans = [];

//풀이2 - 브루트포스 재귀 방법
//count가 N이 되면 ans에 방법의 수 구한 것을 넣기.
let sum = 0;

for (let i = 1; i <= input[0]; i++) {
    sum = 0;
    bf(0, input[i]);
    ans.push(sum);
}
console.log(ans.join('\n'));

function bf(count, n) {
    if(count > n){
        return; //안멈춰주면 무한루프
    }
    if (count === n) {
        sum++;
        return;
    }
    for (let i = 1; i <= 3; i++) {
        bf(count + i, n);
    }
}


/* 풀이1 - 다이나믹프로그래밍 방법

const nMemo = {
    1: 1,
    2: 2,
    3: 4,
    4: 7,

}

for (let i=1; i<= input[0]; i++){
    for (let j=4; j<=input[i]; j++){
        if(nMemo[input[i]]) break;
        nMemo[j] = nMemo[j-1] + nMemo[j-2] + nMemo[j-3];
    }
    ans.push(nMemo[input[i]]);
}

console.log(ans.join('\n'));
*/
