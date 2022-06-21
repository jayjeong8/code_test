//가장 긴 감소하는 부분 수열

const [N, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(n => n.split(' ').map(Number));
const cases = nums[0];

let memo = [[cases[0]],];
let max = 0;

for (let i = 1; i < N[0]; i++) {
    let tmpArr = []; //이전값에 누적된 값

    for (let j = i - 1; j >= 0; j--) { //0보다 "같거나" 큼 주의.
        if (cases[i] < cases[j]) { //현재값보다 이전 값이 더 크면, (감소수열)
            if (tmpArr.length < memo[j].length) {
                tmpArr = memo[j];
                if(max < tmpArr.length) { //더 큰 max가 덮어씌워지지 않게 하기.
                    //이 조건문 없이 max에 바로 대입했을 때 테스트케이스는 전부 맞았다. 함정 조심.
                    max = tmpArr.length;
                }
            }
        }
    }
    memo[i] = [cases[i], ...tmpArr];
}

console.log(max + 1);
// console.log(memo);

/*
5
9 8 1 2 9
 */