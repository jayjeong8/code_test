//골드바흐 파티션
//2보다 큰 짝수는 두 소수의 합으로 나타낼 수 있다.(4부터 시작)
//소수의 쌍은 여러개일 수 있는데, 이것을 골드바흐 파티션이라고 한다.
//두 소수의 순서만 다른 것은 같은 파티션이다.

//테스트케이스의 개수는 최개 100개, 정수 N은 최대 백만

//테스트케이스 중 가장 큰 수 안에 속하는 소수를 구한다.(에라토스테네스의 체)
//구한 소수를 set에 담는다
//소수를 돌면서 n-소수도 존재하는지 확인한다.


const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n').slice(1).map(Number);

const maxNum = Math.max(...input);
const primes = new Array(maxNum + 1).fill(true);
const primeSet = new Set;
const result = [];

//에라토스테네스의 채로 소수를 걸러준다.
for (let i = 2; i*2 <= maxNum; i++) {
    for(let j = i+i; j<=maxNum; j+=i){
        if(!primes[j]) continue;
        primes[j] = false;
    }
}

//아래 for문이 2부터 시작해서 사실 없어도 되는 부분
primes[0] = false;
primes[1] = false;

//primes에 true로 남아있는 소수들을 primeSet안에 숫자로 넣어서 모아준다.
for (let i = 2; i <= maxNum; i++){
    if(primes[i]) primeSet.add(i);
}

//input으로 들어온 숫자들을 for문으로 돌면서 primeSet과 비교한다.
//두 소수의 순서만 다르면 같은 파티션이므로 n/2까지만 검색하며 카운팅한다.
for(let i = 0,leng=input.length; i<leng; i++){
    let primeCase = 0;
    primeSet.forEach(p => {
        if(p > input[i]/2) return false; //forEach break하는 법
        if(primeSet.has(input[i]-p)) primeCase++;
    });
    result.push(primeCase);
}

console.log(result.join('\n'));


