//포도주 시식, 테이블 위에 다양한 포도주가 들어있는 포도주 잔이 "일렬"로 놓여있다.
//규칙1, 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 마셔야하고, 마신 후에는 "원래 위치"에 다시 놓아야한다.
//규칙2, 연속으로 놓여있는 3잔을 모두 마실 수는 없다.
//효주는 최대한 많은 양의 포도주를 맛보려고 한다. 잔마다 들어있는 포도주의 양은 다르다.

//첫째줄에 잔의 개수, 둘째줄부터 n+1째 줄까지 잔에 든 포도주 양이 순서대로 주어진다.

const [N, ...drinks] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

//이번에 안마실 거면 이전 값 중 최대값, 첫잔 마실거면 이전 0번 값 + 이번값, 두번째 잔 마실거면 이전 0,1 중 최대값 + 이번값

let memo = [0, drinks[0], drinks[0]];
for (let i = 1; i < N; i++) {
    const zero = Math.max(...memo);
    const one = memo[0] + drinks[i];
    const two = Math.max(memo[0], memo[1]) + drinks[i];
    memo = [zero, one, two];
}
console.log(Math.max(...memo));