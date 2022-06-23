//수 이어 쓰기 1
//1부터 N까지의 수를 이어서 쓴 다음 이 새로운 수의 자리수를 구하기

const input = require('fs').readFileSync('/dev/stdin');
let N = Number(input);

let count = 9; //10씩 곱해서 테스트할 수를 만들어 줄 예정
let ans = 0;

while (true) {
    if (N - count >= 0) {
        ans += count * String(count).length; //1의 자리는 한개 10의 자리는 두개 100의 자리는 세개... 숫자의 글자수 만큼 자리수가 늘어난다.
        N -= count;
        count *= 10;
    } else { //count로 뺄 수 없는 수가 왔을 때 남은 수에다가 자리수만큼 곱해 더해준다.
        ans += N * String(count).length;
        break;
    }
}

console.log(ans);