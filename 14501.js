//퇴사
//오늘부터 N + 1일째 되는 날 퇴사를 하기 위해서 남은 N일 동안 최대한 많은 상담을 하려고 한다.
//각각의 상담은 [완료하는데 걸리는 기간 T]와 [받을 수 있는 금액 P]로 이루어져 있다. 
//퇴사 전까지 상담을 적절히 했을 때 얻을 수 있는 최대 수익을 구하시오
//N일 안에 끝나는 일만 할 수 있음.

const [N, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const testCase = cases.map(e => e.split(' ').map(Number));

//N일 안에 끝나는 일정일 때만 그 금액을 max와 비교한다.

let max = 0;
counselList(0, 0)
console.log(max);

//일수를 정확히 7일을 채워서 일해야하는게 아니고 퇴사 전까지 가장 높은 금액으로 일하는 것이 목적이므로 카운트 대신 현재 며칠째가 되었는지 나타내는 인덱스를 기준으로 한다.
function counselList(idx, sum) {
    if (idx <= N) {
        max = Math.max(max, sum);
    }
    if (idx > N) {
        return;
    }

    for (let i = idx; i < N; i++) {
        const [T, P] = testCase[i];
        counselList(i + T, sum + P);

    }
}