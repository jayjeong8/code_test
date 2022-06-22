//RGB거리 2
//1번 집의 색은 2번, N번 집의 색과 같지 않아야 한다.
//N번 집의 색은 N-1번, 1번 집의 색과 같지 않아야 한다. 
//i번 집의 색은 i-1번, i+1번과 같지 않아야 한다. 
//모든 집은 옆집과 색이 달라야 하는데 집이 원형으로 둘러서 배치되어있다고 가정해야 한다. (1과 N집이 같으면 안되므로)
//모든 집을 칠하는 최솟값을 출력한다. 

const [N, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let memoRFix = [];
let memoGFix = [];
let memoBFix = [];

for (let i = 0; i < +N; i++) {
    const [R, G, B] = cases[i].split(' ').map(Number);

    //마지막 값이 처음 값에 따라 무엇을 선택할지 바뀐다.
    //시작 값을 고정시키고 나중에 고정시킨 부분을 제외한 값 중 최저값을 선택한다.
    if (i === 0) {
        memoRFix = [R, 1001, 1001];
        memoGFix = [1001, G, 1001];
        memoBFix = [1001, 1001, B];
        continue;
    }

    memoRFix = [R + Math.min(memoRFix[1], memoRFix[2]), G + Math.min(memoRFix[0], memoRFix[2]), B + Math.min(memoRFix[0], memoRFix[1])];
    memoGFix = [R + Math.min(memoGFix[1], memoGFix[2]), G + Math.min(memoGFix[0], memoGFix[2]), B + Math.min(memoGFix[0], memoGFix[1])];
    memoBFix = [R + Math.min(memoBFix[1], memoBFix[2]), G + Math.min(memoBFix[0], memoBFix[2]), B + Math.min(memoBFix[0], memoBFix[1])];
}
console.log(Math.min(memoRFix[1], memoRFix[2], memoGFix[0], memoGFix[2], memoBFix[0], memoBFix[1]));
