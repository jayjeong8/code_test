//집합 (비트마스크) ** 현재 자바스크립트로 못푸는 문제 같음 **
//비어있는 공집합 S가 주어졌을 때, 아래 연산을 수행하는 프로그램을 작성하시오.
//add x : S에 x를 추가한다. (1 <= x <= 20) S에 x가 이미 있는 경우 연산을 무시한다.
//remove x : S에서 x를 제거한다. S에 x가 없는 경우에는 연산을 무시한다.
//check x : S에 x가 있으면 1을, 없으면 0을 출력한다. 
//toggle x : S에 x가 있으면 x를 제거하고, 없으면 x를 추가한다.
//all: S를 {1,2, ..., 20}으로 바꾼다.
//empty: S를 공집합으로 바꾼다. 

//check연산이 주어질 때 마다 결과를 출력한다. (1 or 0)

const [inputM, ...casesS] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const M = Number(inputM); //최대 300만

const commandObj = {
    'add': add,
    'remove': remove,
    'check': check,
    'toggle': toggle,
    'all': all,
    'empty': empty,
}

const S = new Array(21).fill(0);
const answer = [];

for (let i = 0; i < M; i++) {
    const [command, numStr] = casesS[i].split(' ');
    const n = Number(numStr);
    commandObj[command](n);
}

console.log(answer.join('\n'));

//

function add(n) {
    S[n] = true;
}

function remove(n) {
    S[n] = false;
}

function check(n) {
    if (S[n]) {
        answer.push(1);
    } else {
        answer.push(0);
    }
}

function toggle(n) {
    S[n] = !S[n];
}

function all(){
    S.fill(true);
}

function empty(){
    S.fill(false);
}