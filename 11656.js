//문자열 S의 모든 접미사를 사전순으로 정렬해 놓은 배열
//문자열은 알파벳 소문자로만 이루어져있고 길이는 1000보다 작거나 같다.


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const dictionary = [];


for (let i = 0, n = input.length; i < n; i++){
    dictionary.push(input.slice(i));
}
console.log(dictionary.sort().join('\n'));

