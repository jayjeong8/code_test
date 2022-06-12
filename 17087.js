//동생 N명은 A1부터 AN의 위치까지 숨어있다.
//수빈이는 점 S에 있고 걸어서 1초마다 D만큼씩 움직일 수 있다.
//수빈이와 동생 중 누군가의 위치가 같으면 동생을 찾는다.
//모든 동생을 찾기 위해 D의 값을 정하려고 한다. 가능한 D의 최댓값을 구해보자!

//첫째줄에 동생이 몇명인지 알려주는 N과 수빈이 위치 S가 주어진다.
//둘째줄에 각 동생들 위치가 주어진다. (수빈이와 다른 위치)

//동생들 위치값과 수빈이 위치값의 차이 사이의 최대공약수를 구하는 문제

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

//문제가 헷갈릴 때는 구체적으로 변수를 지정해보는 것이 쉬운 이해에 도움이 된다.
const [youngers, subinPos] = input[0].split(' ').map(Number);
const youngersPos = input[1].split(' ').map(Number);

//거리 값이 같은 동생들을 중복계산하지 않기 위해서 Set을 사용하였다.
const mySet = new Set;
youngersPos.forEach(p => {
    //음수는 양수로 변경한다. Math.abs(); 절대값 반환
    mySet.add(Math.abs(subinPos - p));
})

//들어온 수 중 뒤 두수(큐대신 스택으로 배열 재할당 최소화)의 최대공약수를 구하고
//다시 스택에 넣어서 다른 수와의 최대공약수를 구하는 방식.
const stack = [...mySet];

while (stack.length > 1) {
    const a = stack.pop();
    const b = stack.pop();
    stack.push(gcd(a, b));
}
console.log(stack[0]);


function gcd(a, b) {
    //a,b의 크기는 중요하지 않으나 a가 클 경우 더 빠르게 계산할 수 있는 것 같다.
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }
    while (b !== 0) {
        const n = a % b;
        a = b;
        b = n;
    }

    return a;
}

/* 구조분해할당 이용한 함수
function gcd(a, b) {
    while (b) {
        [a,b] = [b, a%b]
    }

    return a;
}*/
