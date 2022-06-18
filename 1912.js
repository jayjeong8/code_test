//n개의 정수로 이루어진 임의의 수열이 주어진다. 이 중 연속된 몇개의 수를 선택해서 가장 큰 합을 구하려고 한다.
//수는 음수 양수를 모두 포함한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);

//풀이2 - dp,'연속한값'을 구하는 문제이기 때문에 값을 계속해서 누적하고 현재값과 비교한다.
const dp = [];

for (let i = 0; i < N; i++) {
    dp[i] = nums[i];
    //현재값이 이전값+현재값보다 작으면 현재값을 이전값+현재값로 변경한다.
    if (dp[i] < dp[i-1] + nums[i]) {
        dp[i] = dp[i-1] + nums[i];
    }
}

console.log(Math.max(...dp));


//풀이1 - 무식하게 풀기 방법
/*
//모든 수가 음수일 경우 max가 0이면 결과값이 0이 되기 때문에 첫번째 입력값을 사용했다.
let max = nums[0];


for (let i = 0; i < N; i++) {
    let temp = 0;
    for (let j = i + 1; j < N; j++) {
        temp += nums[j];
        
        if(temp > max) {
            max = temp;
        }
    }
}

console.log(max);*/
