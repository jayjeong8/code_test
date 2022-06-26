//암호 만들기
//암호로 동작하는 보안시스템을 설치했다.
//암호는 서로 다른 L개의 알파벳 소문자들로 구성되어 있으며 최소 한개 이상의 모음(a e i o u)과 두개 이상의 자음으로 구성되어 있다. 
//암호를 이루는 알파벳이 증가하는 순서로 배열되었을 것이라고 추측된다. (a,b,c는 가능, a,c,b는 불가능)
//암호로 사용된 문자의 종류는 C가지가 있다. C개의 문자들이 모두 주어졌을 때 가능성 있는 암호들을 모두 구하시오
//주어지는 문자들은 알파벳 소문자이며 중복되는 것은 없다. 

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, C] = input[0].split(' ').map(Number);
const letters = input[1].split(' ').sort();

//오름차순인 암호 목록은 전부 구하고 모음 자음 포함 개수를 확인한다.
const array = [];
const result = [];
const aeiou = ['a', 'e', 'i', 'o', 'u'];

passwordList(0,0);
console.log(result.join('\n'));

function passwordList(count, idx) {
    if (count === L) {
        //array 모음자음 개수 확인하고 맞으면 result에 넣기
        let aeiouLength = 0;
        array.map(e => {
            if(aeiou.includes(e)) aeiouLength++;
        })
        if(aeiouLength >= 1 && L - aeiouLength >= 2) result.push(array.join(''));
        return;
    }
    for (let i = idx; i < C; i++) {
        array.push(letters[i]);
        passwordList(count + 1, i + 1);
        array.pop();
    }
}
