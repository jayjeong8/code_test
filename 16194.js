//카드 구매하기2
//민규는 카드구매하기1(11052번)에서 너무 많은 돈을 써버렸다.
//그래서 돈을 최소로 지불해서 카드 N개를 구매하려고 한다.
//11052와 동일하지만 이번엔 최솟값으로 구하기

const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');
const N = + input[0];
const Pi = input[1].split(' ').map(Number);

const memo = {
    1:Pi[0],
}

for (let i=2; i<=N; i++){
    const iOrder = i-1;
    memo[i] = Pi[iOrder];
    for(let j=iOrder; j>=i/2; j--){
        memo[i] = Math.min(memo[i], memo[j]+memo[i-j]);
    }
}
console.log(memo[N]);