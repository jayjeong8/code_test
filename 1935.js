//사람들이 보편적으로 사용하는 사칙연산 표기는 '중위'표기식, 숫자와 숫자 사이에 표기한다.
//후위표기식은 식을 뒤쪽에 표시한다. ex - 3 + 5 * 2 = 352*+ , (3+5)*2 = 35+2*

//중간 결과 및 식의 결과가 20억 이하의 단위이다., 단위가 커서 다른 표기법을 써야할지(BigInt 같이) 확인
//식을 조사해서 알파벳이 나오면 계산 스택에 하나씩 숫자를 넣고, 식이 나오면 스택의 숫자를 꺼내서 계산하고 답에 추가한다.

// const input = [1, 'BCA+*D-', 2, 3, 5, 9];

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');


const [n, exp, ...num] = input;
const expression = exp.split('');
const nums = num.map(Number);
const alphabet = /[A-Z]/;
const operand = []; //피연산자

expression.forEach(x => {
    alphabet.test(x) ? operand.push(nums[x.charCodeAt(0) - 65])
        : calc(x);
})
console.log(operand[0].toFixed(2));

//계산 후에 operand에 다시 넣기
function calc(x) {
    const b = operand.pop();
    const a = operand.pop();

    if (x === '+') operand.push(a + b);
    if (x === '-') operand.push(a - b);
    if (x === '*') operand.push(a * b);
    if (x === '/') operand.push(a / b);
}
