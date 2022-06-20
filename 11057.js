//오르막 수, 수의 각 자리가 오름차순을 이루는 수를 말한다.
//인접한 수가 같아도 오름차순으로 친다. (2234, 3678, 11119)
//수의 길이 N이 주어졌을 때 오르막의 개수를 구하기, 수는 0으로 시작할 수 있다.
//경우의 수를 10,007로 나눈 나머지를 출력한다.

const input = require('fs').readFileSync('/dev/stdin')
const N = Number(input);

const mod = 10007;

//맨 앞자리가 0에서 시작한 경우의 수는 이전값 총 경우의 수와 같고, 그 값에 이전값의 0에서 시작한 값~다음값들을 차례로 빼주면 결과를 구할 수 있다.


const memo = [new Array(10).fill(1)];
memo[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
memo[2] = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

//-가 아니라 +로 식이 되게 만들어야 큰수일때 미리 mod 나누기 가능
for (let i = 3; i < N; i++) {
    const tmpArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tmpArr[0] = 1;
    for (let j = 1; j <= 9; j++) {
        tmpArr[j] = (tmpArr[j - 1] + memo[i - 1][j]) % mod;
    }
    memo[i] = tmpArr;
}

console.log(memo[N - 1].reduce((acc, cur) => acc + cur, 0) % mod);
