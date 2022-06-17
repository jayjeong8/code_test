//2*n 타일링 2
//2*n 직사각형을 1*2, 2*1, 2*2 타일로 채우는 방법의 수 구하고 10007로 나눈 나머지 출력하기

const input = require('fs').readFileSync('/dev/stdin')
const N = Number(input);

const nHistory = {
    1: 1,
    2: 3,
}

for (let i = 3; i <= N; i++) {
    nHistory[i] = (nHistory[i - 1] + nHistory[i - 2] * 2) % 10007;
}

console.log(nHistory[N]);
