//이진수 중 1이 두번 연속으로(11)나타나지 않는 수를 이친수라고 한다.
//이친수는 0으로 시작하지 않는다.
//N자리 이친수의 개수를 구하는 프로그램을 작성하기

//각 숫자에 0과 1로 끝나는 이친수의 개수를 저장한다.
//현재 숫자는 이전 숫자의 0으로 끝나는 수 +2(0,1하나씩), 1로 끝나는 수 +1만큼(0에 하나) 수가 올라간다. (1이 연속되면 안되기 때문에)

const input = require('fs').readFileSync('/dev/stdin');
const N = Number(input);

//풀이 2 (피보나치와 동일하게 수가 커지기 때문에 1차원배열, 피보나치로 해결 가능
//시간과 메모리는 풀이 1,2가 비슷하다.

const memo = {
    1: 1,
    2: 1,
    3: 2,
}

for (let i = 4; i <= N; i++) {
    memo[i] = BigInt(memo[i-1]) + BigInt(memo[i-2]);
}

console.log(String(memo[N]));

//풀이 1
/*const memo = {
    1: [0, 1],
    2: [1, 0],
    3: [1, 1],
}

//자리수가 커지기 때문에 BigInt를 사용해줘야하고 출력할때 n이 포함되지 않도록 String으로 변경해줘야한다.
for (let i = 4; i <= N; i++) {
    const pre = i - 1;
    memo[i] = [BigInt(memo[pre][0] + memo[pre][1]), BigInt(memo[pre][0])];
}*/

// console.log(String(memo[N][0] + memo[N][1]));
