//수열에서 가장 긴 증가하는 부분 수열을 구하는 프로그램 작성
//이번에는 가장 긴 증가하는 수열의 길이와 수열을 같이 출력한다. 


const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const N = +input[0];
const nums = input[1].split(' ').map(Number);

//이전 가장 긴 증가 부분을 담아놓고 append하는 방식으로 시도
memo = new Array(N).fill([]);

//증가하는 수열 찾기
for (let i = 0; i < N; i++) {

    let tmpArr = [];

    //0보다 같거나 커야함 주의
    for (let j = i - 1; j >= 0; j--) {
        //현재값(nums[i])이 이전값(nums[j])보다 클 경우
        if (nums[i] > nums[j]) {
            //temp에 저장된 값과 memo[j]에 저장된 값 비교, 더 길이가 큰걸 남겨서 현재값 memo에 저장한다.
            if (tmpArr.length < memo[j].length) {
                tmpArr = memo[j];
            }
        }
    }
    memo[i] = [...tmpArr, nums[i]];
}

//찾은 수열 중 가장 긴 것 찾기
//idx와 max 바깥에 있어야함 주의
let idx = 0;
let max = 1;

for (let i = 0; i < N; i++) {
    if (memo[i].length > max) {
        max = memo[i].length;
        idx = i;
    }
}

console.log([memo[idx].length, memo[idx].join(' ')].join('\n'));