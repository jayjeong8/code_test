//3*N 크기의 벽을 2*1, 1*2 크기의 타일로 채우는 경우의 수를 구해보자

const input = require('fs').readFileSync('/dev/stdin')
const N = Number(input);

const memo = {
    0: 1, //N은 1이상이나 점화식을 위해서 설정함
    2: 3,
}

for (let i = 4; i <= N; i += 2) {
    if (N % 2) break;

    memo[i] = memo[i - 2] * 3;
    for (let j = 4; j <= i; j += 2) {
        //4 포함 이후 나오는 짝수는 모두 특수한 케이스 2개를 가지고 있다.
        //(눕힌것을 일렬로 깔고 양끝에 기둥, 사이에 두겹씩 넣는 형태)
        //------
        //| = = |
        //ex) 8-4 = 4, 4의 특수케이스 2개를 뒤쪽에도 사용해보면 앞에 구성될 수 있는 경우의 수는 4의 11이기 때문에 22.
        //특수케이스 2개와 그 앞에 구성될 수 있는 수를 추가로 더하는 작업이다.
        memo[i] += memo[i - j] * 2;
    }
}

console.log(N % 2 ? 0 : memo[N]);