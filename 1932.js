const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, ...nums] = input.map(i => i.split(' ').map(Number));

const ans = [[nums[0][0]]]; //삼각형의 크기는 1이 들어올 수도 있기 때문에 더 큰 배열을 만들어두면 런타임에러가 뜬다.

for (let i = 1; i < N; i++) {
    const length = nums[i].length;
    const tmp = [];

    for (let j = 0; j < length; j++) { //ex) j = 0,1,2 / 0,1,2,3 / 0,1,2,3,4
        if (j === 0) { //가장 왼쪽 숫자는 가장 왼쪽을 참고하게 한다.
            tmp.push(ans[i - 1][j] + nums[i][j]);
        } else if (j === length - 1) { //가장 오른쪽 숫자는 가장 오른쪽을 참고하게 한다.
            tmp.push(ans[i - 1][j - 1] + nums[i][j]);
        } else {
            tmp.push(Math.max(ans[i - 1][j], ans[i - 1][j - 1]) + nums[i][j]); //바로 위와 위 옆 중 더 큰값을 참고하게 한다.
        }
    }
    ans.push(tmp);
}

console.log(Math.max(...ans[N-1]));