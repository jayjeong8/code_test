//8진수가 주어졌을 때 2진수로 변환하기.
//주어지는 수의 길이는 333,334(2진법 단위일 때는 *3인 백만정도의 길이가 된다.)
//1373 참고

const input = require('fs').readFileSync('/dev/stdin','utf8').trim();
const n = input.split('');
let ans = "";

while(n.length){
    //num이 Number가 아니면 toString은 작동하지 않는다.
    const num = Number(n.pop()).toString(2);
    //맨 앞자리를 제외하면 3자리 단위로 0이 채워져있어야 올바른 수가 된다.
    n.length > 0
        ? ans = num.padStart(3,'0') + ans
        : ans = num + ans;
}
console.log(ans);