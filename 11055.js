//가장 큰 증가 부분 수열
//수열 A가 주어졌을 때 부분 수열의 합 중 가장 큰 것을 구하기
//단 현재 선택한 값은 이전 값보다 커야함.
//ex) {"1",100,"2,50,60",3,5,6,7,8}
/*test
5
5 1 2 3 10
5
1 8 2 3 9

2
1 2
*/

const [N, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(n => n.split(' ').map(Number));
const cases = nums[0]

const memo = [cases[0],];

for (let i = 1; i < N[0]; i++) {
    let max = 0;

    //현재 값보다 작은 값이 가지고 있는 누적값 중 가장 큰 값에 더하기
    for (let j = i - 1; j >= 0; j--) {
        if (cases[i] > cases[j]) { //이전 값이 현재 값보다 작으면,
            if (max < memo[j]) { //이전 값에 누적된 값 중 가장 큰 값을 max로 한다.
                max = memo[j];
            }
        }
    }
    memo[i] = max + cases[i]; //현재값의 누적값은  max에 현재값을 더해 만든다.
}

console.log(Math.max(...memo));
