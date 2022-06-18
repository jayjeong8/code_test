//계단수 - 어떤 수의 모든 인접한 자리 수의 차이가 1인 수 ex-45656
//N이 주어질 때 길이가 N인 계단 수가 총 몇 개 있는지 구하기, N은 최대 100이다.
//0으로 시작은 제외한다.  
//정답을 1,000,000,000으로 나눈 나머지를 출력한다. 

const input = require('fs').readFileSync('/dev/stdin');
const N = Number(input);

const mod = 1000000000;

//각 자리수에서 이전값과 동일 자리수와 1차이가 나야하기 때문에 이전값 +1,-1 자리수의 값을 더하면 현재값 i자리수의 값을 구할 수 있다.
const memo = new Array(N + 1).fill([0, 0, 0, 0, 0, 0, 0, 0, 0]);

memo[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
memo[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1]

for (let i = 3; i <= N; i++) {
    // 따로 array를 만들지않고 바로 memo[i],[j]로 값을 넣으면 값이 덮어씌워진다.
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let j = 0; j <= 9; j++) {
        if (j > 0 && j < 9) array[j] = (memo[i - 1][j - 1] + memo[i - 1][j + 1]) % mod;
        if (j === 0) array[j] = memo[i - 1][j + 1] % mod;
        if (j === 9) array[j] = memo[i - 1][j - 1] % mod;
    }
    memo[i] = array;
}

console.log(memo[N].reduce((acc, cur) => acc + cur, 0) % mod);