//1, 2, 3 더하기 3
//연속해서 같은 숫자를 사용할 수 있고, 숫자를 몇 개를 사용해도 상관없다.
//정수 n은 최대 백만이므로 1,000,000,009 로 나눈 나머지를 출력한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
const cases = input.slice(1);

const max = Math.max(...cases);
const mod = 1000000009;

const memo = {
    1: 1,
    2: 2,
    3: 4,
    4: 7,
}

for (let i = 5; i <= max; i++) {
    memo[i] = (memo[i-1] + memo[i-2] + memo[i-3]) % mod;
}

const ans = [];
cases.forEach(i => ans.push(memo[i]));

console.log(ans.join('\n'));
