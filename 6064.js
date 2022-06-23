//카잉 달력 - 카잉 제국의 백성들은 특이한 달력을 사용한다. 
//M과 N보다 작거나 같은 두개의 자연수 x,y를 가지고 각 년도를 <x:y>와 같은 형식으로 표현한다. 
//x가 M보다 커지면 다시 1, y와 N도 동일. M:N이 가질 수 있는 최종 값.
//M, N, x, y로 구성된 여러 테스트케이스가 주어진다. 

const [N, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n')
const cases = nums.map(e => e.split(' ').map(Number));

let ans = [];

//M과 N의 최소 공배수를 구한다.
//x와 y가 나올 수 있는 수의 목록을 구해서 겹치는 수가 나오면 ans에 추가한다.
//최소공배수보다 수가 커지면 -1을 넣는다.

for (let i = 0; i < +N; i++) {
    const [M, N, x, y] = cases[i];

    //최소공배수 구하기
    let tempM = M;
    let tempN = N;

    while (tempN !== 0) {
        const n = tempM % tempN;
        tempM = tempN;
        tempN = n;
    }

    const lcm = M * N / tempM; //두 수를 곱한 값에 최대공약수를 나눠주면 최소공배수가 된다.

    //x와 y로 나올 수 있는 연도 값 중 겹치는 값을 찾는다.
    let xCheckNum = x;
    let yCheckNum = y;

    while (true) {
        //먼저 작은쪽에다가 한번 더 수를 더한 다음에 아래 x===y 로 비교해줘야한다.
        //비교를 먼저하고 x나 y에 값을 더하게 되면 후반부에 정답이 있는 수는 누락된다.
        if (xCheckNum > yCheckNum) {
            yCheckNum += N;
        } else if (yCheckNum > xCheckNum) {
            xCheckNum += M;
        }

        if (xCheckNum === yCheckNum) {
            ans.push(xCheckNum);
            break;
        }

        //이 값은 최소공배수보다 커질 수 없다. (최소공배수가 나올 수 있는 최대 연도이다.)
        if (xCheckNum >= lcm && yCheckNum >= lcm) {
            ans.push(-1);
            break;
        }
    }
}

console.log(ans.join('\n'));


/* 시간 초과 풀이
for (let i = 0; i < +N; i++) {
    //수가 x,y가 되도록 증가시키고 M,N 까지 가도 못찾았으면 -1 출력
    const [M, N, x, y] = cases[i];

    let year = 1;

    while (true) {
        let tmpX = year % (M) ? year % (M) : M;
        let tmpY = year % (N) ? year % (N) : N;

        if (tmpX === x && tmpY === y) {
            break;
        }

        if (tmpX >= M && tmpY >= N) {
            year = -1;
            break;
        }

        year++;
    }

    ans.push(year);
}
*/
