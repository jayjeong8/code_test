//문자열 S의 모든 접미사를 사전순으로 정렬해 놓은 배열
//문자열은 알파벳 소문자로만 이루어져있고 길이는 1000보다 작거나 같다.


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const dictionary = [];


for (let i = 0, n = input.length; i < n; i++){
    dictionary.push(input.slice(i));
}
console.log(dictionary.sort().join('\n'));

//sort는 복사본이 아닌 원배열을 정렬시킨다.
// 복사본을 만들때 바로 대입하는 대신 스프레드 등의 형식을 이용하여야,
// 복사본.sort시 원본 배열도 바뀌는 것을 방지할 수 있다.
/*
const ans = [...dictionary];

console.log(ans.sort());
console.log(dictionary);*/
