//올바른 괄호 문자열이면 YES 아니면 NO를 출력하는 문제
// (())() yes, (()( no


const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

//값을 하나씩 꺼내서 스택에 넣고 스택이 2개 이상있을 때 맨 뒤 두개를 비교해서 한쌍이면 지우기(블록깨기 게임처럼)
//스택에 아무것도 남지 않으면 예스, 남으면 노
//시작부터 오른쪽 괄호가 나오거나 짝이 맞지않는다면 no


for(let i=1; i <= + input[0]; i++){
    let ans = '';
    const vpsTest = input[i].split('');
    const stack = [];

    while(stack[0]!==')'&& vpsTest.length){
        stack.push(vpsTest.shift());
        let stLeng = stack.length;
        if(stLeng >=2 && stack[stLeng-1] === ')' && stack[stLeng-2] === '('){ //스택에 들어있는 끝값 두개가 ()일 경우
            stack.splice(-2,2);
        }

    }
    stack.length ? ans += 'NO' : ans += 'YES';
    console.log(ans);
}
