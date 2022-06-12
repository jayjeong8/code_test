//-2진법에서는 -2단위로 수가 커진다. 1 -2 4 -8 16 -32 64...
//0 예외처리
const input = require('fs').readFileSync('/dev/stdin','utf8').trim();

let tmp = Number(input);
let ans = '';

//tmp가 0이 되기 전까지 -2(2진법 구할시 -2대신 2)로 나눈 나머지가 한자리씩 구성된다.
while (tmp !== 0) {
    if (tmp % -2 === 0) {
        ans = '0' + ans;
        tmp /= -2;
    } else { //tmp % -2 의 값이 1이나 -1일 경우
        ans = '1' + ans;
        //홀수일 경우 -1로 값을 내림해주고 나눠줘야한다.
        tmp = (tmp - 1) / -2;
    }
    console.log(tmp);
}

//0 예외처리
console.log(input == '0' ? 0 : ans);