//RGB 거리에는 집이 N개가 있다. 거리는 선분으로 나타낼 수 있고, 1번 집부터 N번 집이 순서대로 있다.
//집은 빨강 초록 파랑 중 하나의 색으로 칠해야 하는데, 각각 칠하는 비용이 있고 모든 집을 칠하는 비용의 최솟값을 구하는 문제이다.
//집을 칠하는 규칙이 있다.
//- 1번 집의 색은 2번 집의 색과 같지 않아야 한다. (처음 집은 옆집이랑 다른 색이어야 한다.)
//- N번 집의 색은 n-1번 집의 색과 같지 않아야 한다. (마지막 집은 옆집이랑 다른 색이어야 한다.)
//i번 집의 색은 i-1번 i+1번 집의 색과 같지 않아야 한다. (모든 집은 옆집이랑 다른 색이어야 한다.)
//첫째 줄에 집의 수 N이 주어진다. 둘째줄에 각 집을 빨강 초록 파랑으로 칠하는 비용이 1번집부터 한줄에 하나씩 주어진다.(각 집마다 비용 다름)

//규칙에 의해 이전 집이 선택한 색은 선택할 수 없다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, ...costs] = input;
const costsArr = costs.map(i => i.split(' ').map(Number));

const ans = costsArr.reduce(([a, b, c], [d, e, f]) => {
return [d + Math.min(b,c), e + Math.min(a,c), f + Math.min(a,b)]
}, [0, 0, 0]);

console.log(Math.min(...ans));


/* 풀이 1
for (let i = 1; i < N; i++) {
    const tmpArr = costsArr[i];
    for (let j = 0; j < 3; j++) {
        tmpArr[j] = tmpArr[j] + Math.min(costsArr[i - 1][(j + 4) % 3], costsArr[i - 1][(j + 5) % 3]);
    }
    costsArr[i] = tmpArr;
}

console.log(Math.min(...costsArr[N - 1]));*/
