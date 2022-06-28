//부등호 < >
//'<'와 '>'가 k개 나열된 순서열 A가 있다. 이 k개의 부등호 기호 사이사이에 서로 다른 한자릿수 숫자(0-9)를 넣어서 모든 부등호 관계를 만족시키려고 한다.
//ex)< < < > < < > < >  3 < 4 < 5 < 6 > 1 < 2 < 8 > 7 < 9 > 0
//주어진 부등호 관계를 만족시키는 결과는 하나 이상 존재한다. 최소값과 최대값을 출력하라.
//답의 자릿수는 K + 1개가 되어야한다. (부등호로 비교를 하는 수의 개수)

const [inputK, cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const K = Number(inputK);
const inequalitySign = cases.split(' ');

//풀이 2, 208ms

const answer = [];

for (let i = 0; i <= 9; i++) {
    check(`${i}`, 0); //숫자가 각 수로 시작하는 경우의 수를 만들기 위해 string에 한글자 넣기
}
console.log(answer.pop() + `\n` + answer.shift()); //나온 결과값 중 가장 큰값(맨뒤)과 가장 작은값(맨앞) 출력하기

function check(string, count) {
    if (count === K) {
        answer.push(string);
        return;
    }

    const last = string[count]; //맨 끝의 수, 비교를 위해 변수로 저장
    if (inequalitySign[count] === '>') {
        for (let i = 0; i <= 9; i++) {
            //사용하지 않은 수이면서 부등호 조건을 만족할 경우 check 함수 파라미터에 string붙여서 실행
            if (!string.includes(`${i}`) && last > i) {
                check(string + `${i}`, count + 1)
            }
        }
    } else {
        for (let i = 0; i <= 9; i++) {
            if (!string.includes(`${i}`) && last < i) {
                check(string + `${i}`, count + 1);
            }
        }
    }

}

/* 풀이 1 2352ms
let max = 0;
let min = 9999999999;
const array = [];
const visited = new Array(10).fill(false);

makeNumList(0);
console.log(String(max).padStart(K+1,'0'));
console.log(String(min).padStart(K+1,'0'));

//중복되지않는 N과 M 구하기로 0-9의 수로 K+1개가 되는 결과값을 만들고 부등호를 통과하는지 별도 함수로 확인한 다음에 그 값을 max와 min에다가 비교한다.
function makeNumList(count) {
    if (count === K + 1) {
        inequalityCheck(array);
        return;
    }
    
    for(let i=0; i<=9; i++){
        if(!visited[i]){
            visited[i] = true;
            array.push(i);
            makeNumList(count + 1);
            array.pop();
            visited[i] = false;
        }
    }
}

function inequalityCheck(array) {
    let check = [];

    for(let i=0; i<K; i++){
        if(inequalitySign[i] === '<'){
            array[i] < array[i+1] ? check.push(true) : check.push(false);
        } else {
            array[i] > array[i+1] ? check.push(true) : check.push(false);
        }
    }

    if(!check.includes(false)) {
        const cur = array.join('');
        max = Math.max(max, cur);
        min = Math.min(min, cur);
    }
}*/
