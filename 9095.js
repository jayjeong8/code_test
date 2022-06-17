//1,2,3 더하기
//1과 2와 3으로 N을 구성할 수 있는 방법의 수
//N은 11보다 작다

const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n').map(Number);

const ans = [];
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