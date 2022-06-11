//4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
//백만 이하의 모든 짝수에 대해서 이 추측을 검증하는 프로그램을 작성하기
//입력의 마지막 줄에는 0이 하나 주어진다.
//만약 a+b조합이 여러가지라면, b-a가 가장 큰 것을 출력한다. (가장 처음에 찾은거일 확률)

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
//0빼기
input.pop();

//소수 구하기
//모든 케이스에 백만까지의 소수를 다 구할 수 없으니 input에 들어온 수 중 최대 값을 찾아서 소수를 구한다.
const maxN = Math.max(...input);

const prime = new Array(maxN + 1).fill(true);
//key로 바로 찾을 수 있도록 Map, 최대 값이 클 수록 Map을 사용하는 것이 유리하다.
const primes = new Set();

//아리스토텔레스의 체, 자기 자신을 제외하고 배수인 모든 수를 false로 변경한다.
for (let i = 2, t = Math.sqrt(maxN); i <= t; i += 1) {
    if (!prime[i]) { //이미 누가 다녀가서 false면 continue;
        continue;
    }

    for (let j = i * 2; j <= maxN; j += i) { //자기자신을 제외하기 위해 i의 2배수부터 시작하고 i만큼 더해서 배수를 늘려나간다.
        prime[j] = false;
    }
}
for (let i = 3; i <= maxN; i += 2) { //찾아낸 모든 소수를 primes에 저장한다.
    if (prime[i]) {
        primes.add(i);
    }
}

//인풋으로 들어온 짝수 안 소수 찾기
const ans = [];
input.forEach(n => {
    let found = false;
//가능한 소수만 따로 모아놓은 prime을 돌면서 n-p도 있는지 확인한다.
    for (let p of primes) {
        if (p > n / 2) {
            break;
        }
//n-p도 있으면 정답에 넣고, found도 true로 바꿔준다.
        if (primes.has(n - p)) {
            ans.push(`${n} = ${p} + ${n - p}`);
            found = true;
            break;
        }
    }
//found가 없으면 아래 문구 넣기
    if (!found) {
        ans.push(`Goldbach's conjecture is wrong.`);
    }
})

console.log(ans.join('\n'));