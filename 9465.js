//상냥이는 품질이 좋지않은 스티커를 구매해서, 한장을 떼어내면 상하좌우 스티커는 함께 찢어져서 사용할 수 없게 된다.
//상냥이는 각 스티커에 점수를 매기고 점수의 합이 최대가 되게 스티커를 떼어내려고 한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const cases = input.splice(1).map(i => i.split(' '));
const N = +input;

const ans = [];

for (let i = 0; i < N * 3; i += 3) {
    const testCaseN = +cases[i];

    const memo = [];
    const up = cases[i + 1].map(Number);
    const down = cases[i + 2].map(Number);

    memo[0] = [0, up[0], down[0]];

    for (let j = 1; j < testCaseN; j++) {
        const noSticker = Math.max(...memo[j - 1]);//이번 스티커를 안떼어낼 경우 제로,위,아래 중 어떤 값이라도 가져올 수 있다.
        const aboveSticker = Math.max(memo[j - 1][0], memo[j - 1][2]) + up[j]; //이번 스티커를 떼낼거면 옆 스티커 중 안떼어낼 것, 아래만 가져올 수 있다.
        const belowSticker = Math.max(memo[j - 1][0], memo[j - 1][1]) + down[j]; //이번 스티커를 떼낼거면 옆 스티커 중 안떼어낼 것, 위만 가져올 수 있다.
        memo[j] = [noSticker, aboveSticker, belowSticker];

    }
    ans.push(Math.max(...memo[testCaseN - 1]));
}

console.log(ans.join('\n'));