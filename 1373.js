//2진수를 8진수로 바꾸기
//2진수 3자리수가 8단위(2의세제곱)이기 때문에 3자리씩 나눠서 답을 구할 수 있다.(slice(-3)으로 뒤에서부터 잘라보기
//(parseInt(n,2).toString(8)로 10진수로 변경 후 8진수로 바꿔서 답을 구할 수도 있는데
//**숫자의 크기가 커서 제대로 동작하지않는다.)
//1212 참고

const input = require('fs').readFileSync('/dev/stdin','utf8').trim();
//splice를 위해서 split
const n = input.split('');
let ans = '';

while(n.length) {
    //뒤에서부터 잘라오기 때문에 1의자리수 부터 구한다.
    //그러므로 구하는 값을 ans의 앞쪽으로 붙여준다.
    //3자리수보다 적에 length가 남아도 -3이 제일 앞쪽까지 정상 작동한다.
    //parseInt에 넣은 숫자와 해당 숫자가 몇진법인지 알려주면 10진법으로 변환한다.
    //3자리단위라 7(4+2+1)까지의 숫자만 계산하기때문에 10진법으로 변환되어도 괜찮다.
    ans = parseInt(n.splice(-3).join(''),2) + ans;
}

console.log(ans);

