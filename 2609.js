const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let [A, B] = input;
if (A<B) [A, B] = [B, A];

//A가 B보다 크다는 전제하에 A를 B로 나눈 나머지를 구하는 식을 반복하여 B가 0이 되면 A는 최대공약수가 된다. 유클리드 호제법
while(B !== 0) {
    const n = A%B;
    A = B;
    B = n;
}
console.log(A);

const [C, D] = input;
//두 수 A*B = 두수의 최대공약수*최소공배수와 같다.
//두 수를 곱한 값에 최대공약수를 나눠주면 최소공배수가 된다.
console.log(C*D/A);



