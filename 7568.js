//키와 몸무게가 전부 커야 덩치가 더 큰사람이다. 서로 둘 중 하나씩 크다면 같은 덩치로 평가한다.
//N명의 집단에서 자신보다 큰 덩치의 사람수+1로 정해진다.
//같은 덩치 등수 여러명 가능하고, 그 아래는 여전히 k+1의 수로 등수를 매긴다.
//한명이 나머지 모두랑 비교해서 큰사람 나올때마다 등수값을 1씩 올린다.

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
let result = new Array(N).fill(1);
let wh = [];

for(let i=1; i<=N; i++){
    wh.push(input[i].split(' ').map(Number));
}

for(let i=0; i<N; i++){
    const [w1,h1] = wh[i];
    for(let j=0; j<N; j++){
        const[w2,h2] = wh[j];
        if(w1<w2 && h1<h2){
            result[i]++
        }
    }
}
console.log(result.join(' '))