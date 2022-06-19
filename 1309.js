//동물원 - 가로 2, 세로 N칸인 우리가 있다.
//사자들을 우리에 가둬야하는데 어느 방향으로나 붙어있게 배치할 수 없다.
//사자를 배치하는 경우의 수가 몇가지인지 알아내는 프로그램을 작성하자.
//사자를 한 마리도 배치하지 않는 경우도 하나의 경우의 수로 친다. == 사자를 0마리부터 최대 마리까지 넣는 경우의 수들
//사자를 배치하는 경우의 수를 9901로 나눈 나머지를 출력하여라.

const input = require('fs').readFileSync('/dev/stdin');
const N = Number(input);

const mod = 9901;

//풀이 2
const memo = [1, 3];
for (let i = 2; i <= N; i++) {
    //memo[i - 1]는 이전 넘버의 [빈칸,왼,오] 경우의 수를 합친 값이다.(풀이1 참고)
    //[i - 1]를 두배하고 그 이전값의 최종값을 더하면 풀이1의 합계와 같아진다.
    memo[i] = (memo[i - 1] * 2 + memo[i - 2]) % mod;
}
//ex) N = 4 이면 memo = [1, 3, 7, 17, 41]
console.log(memo[N]);


//풀이 1
//이번 값이 두칸이 비어있으면 그 이전 값으로 빈칸, 왼, 오 모두 올 수 있으므로 세 값을 더하고,
//이번 값이 한칸이 비어있으면 그 이전 값으로 비워진 윗 칸, 빈칸 올 수 있으므로 왼, 오에 따라서 반대쪽 + 빈칸을 더한다.
/*
const memo = {
    1: [1, 1, 1],
}

for (let i = 2; i <= N; i++) {
    const pre = i - 1;
    const zero = (memo[pre][0] + memo[pre][1] + memo[pre][2]) % mod;
    const left = (memo[pre][0] + memo[pre][2]) % mod;
    const right = (memo[pre][0] + memo[pre][1]) % mod;
    memo[i] = [zero, left, right];
}

console.log((memo[N][0] + memo[N][1] + memo[N][2])% mod);
*/

