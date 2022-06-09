//쇠막대기를 겹쳐놓고 레이저를 수직으로 발사하여 총 몇개의 쇠막대기가 되었는지 출력하는 문제
//'('와 ')'가 바로 이어져서 나오면 레이저, 떨어져서 나오면 쇠막대기이다.
//모든 쇠막대기는 아래에 깔리는 것이 가장 길다. (가 나오다가 )가 나왔을때 가장 나중 (와 먼저온 )가 연결되어 짧은 막대기가 된다.


//레이저가 나올때 스택에 쌓여있는 '('개수만큼 ans에 더하기, 총 합에 총'('개수 더하기 (레이저 제외)

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('');

const steel = [];
let ans = 0;
let steelLeng = 0;

for (let i = 0, n = input.length; i < n; i++) {
    if (input[i] === '(' && input[i + 1] !== ')') { //쇠막대기 하나 시작할 경우
        steel.push(input[i]);
        steelLeng++
    } else if (input[i] === ')' && input[i - 1] === '(') { //레이저일 경우
        ans += steel.length;
    } else if (input[i] === ')' && input[i - 1] !== '(') { //쇠막대기 하나 끝날 경우
        steel.pop();
    }
}
ans += steelLeng;

console.log(ans);