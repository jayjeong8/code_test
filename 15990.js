//1,2,3 더하기 5
//같은 수를 두번 이상 연속해서 사용하면 안된다!!!!!!!!!!!
//n은 양수이며 최대 10만이다.
//방법의 수를 1,000,000,009로 나눈 나머지를 출력한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').slice(1).map(Number);

//<2차원 배열>을 이용하여 마지막 숫자가 1,2,3이 들어가는 경우의 수를 구해야한다
//각 끝나는 넘버에 따라 배열에 넣어보기
//1,2,3 차이나는 곳에서 23,13,12로 끝나지않는 경우의 수를 찾아서 더하기
const memo = {
    1: [1, 0, 0],
    2: [0, 1, 0],
    3: [1, 1, 1],
    4: [2, 0, 1],
}
const mod = 1000000009;
const ans = [];
const max = Math.max(...input);

for (let j = 5; j <= max; j++) {
    const one = memo[j - 1][1] + memo[j - 1][2] % mod;
    const two = memo[j - 2][0] + memo[j - 2][2] % mod;
    const three = memo[j - 3][0] + memo[j - 3][1] % mod;
    memo[j] = [one, two, three];
}

for (let i = 0, n = input.length; i < n; i++){
    ans.push((memo[input[i]][0] + memo[input[i]][1] + memo[input[i]][2]) % mod);
}

console.log(ans.join('\n'));