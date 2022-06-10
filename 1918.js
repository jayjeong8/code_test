// const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('');
const input = 'A*B-C*D/E'.split(''); // AB*CD*E/-
const stack = [];
let ans = '';

input.forEach(x => changeToPostfix(x));
while(stack.length) ans += stack.pop();

console.log(ans);


function changeToPostfix(x){
    const alphabet = /[A-Z]/;

    if(alphabet.test(x)){
        ans+=x;
    }
    else if(x === '(') {
        stack.push(x);
    }
    else if(x === ')') {
        while(stack[stack.length-1] !== '('){
            ans += stack.pop();
        }
        stack.pop(); //'(' 빼기
    }
    else if(x === '*' || x === '/') {
        const check = /[*/]/; //정규표현식은 regex개체이므로 직접적으로 (===) 값을 비교하지말고
        //test를 이용하여 비교하기
        while(check.test(stack[stack.length-1])) {
            ans += stack.pop();
        }
        stack.push(x);
    }
    else if(x === '+' || x === '-') {
        //괄호 안의 +-더라도 '('가 오면 멈춘다.
        while(stack.length && stack[stack.length-1] !== '(') {
            ans += stack.pop();
        }
        stack.push(x);
    }
}


