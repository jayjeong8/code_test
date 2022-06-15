//타임머신.. 미래세계는 A진법을 사용하고 있었고, 과거에서 온 정이는 B진법을 사용하고 있었다.
//A진법을 B진법으로 변환시키기.

//최대 백이십만 정도의 수

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

//입력 첫줄은 A B
const [A, B] = input[0].split(' ').map(Number);
//두번째줄은 A진법으로 나타낸 숫자 "자리수"의 개수 M
const M = +input[1];
//세번째 줄은 A진법을 이루고 있는 "자리수" 숫자 M개를 공백으로 구분해서 주어짐 ex) 2 16 = 2*17, 16*1;
const num = input[2].split(' ');
const result = [];

//각 자리수에 맞는 숫자를 구하기 위해서 총 자리수 개수-1만큼 power해서 구해준다.
let powN = Math.pow(A, M - 1);
let sum = 0;
for (let i = 0; i < M; i++) {
    sum += num[i] * powN; //맨 앞자리수에 power를 곱하고
    powN /= A; //power의 자리수 내려주기
}

while (sum >= 1) {
    result.push(sum % B);
    sum = Math.floor(sum / B);
}
//나머지로 1의자리수 부터 구해지기 때문에 reverse하기
console.log(result.reverse().join(' '));


