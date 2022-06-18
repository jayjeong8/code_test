//수열 중 수가 점점 증가하는 숫자들을 뽑아서 가장 긴 길이를 가진 부분을 만드는 프로그램 작성
//ex {10,20,10,30,20,50} = 10,20,30,50 (길이 4)

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number)

const memo = new Array(N).fill(1);


//수열을 돌면서 현재 수열보다 이전 수열이 더 작을 때, 더 작은 수열+현재수열(1)값이 더 큰 쪽을 저장한다.
for (let i = 0; i < N; i++) {
    let curNum = 1;
    for (let j = i-1; j>=0; j--) {
        if (nums[i] > nums[j]) {
            curNum = Math.max(curNum, memo[i] + memo[j]);
        }
    }
    memo[i] = curNum;
}

console.log(Math.max(...memo));