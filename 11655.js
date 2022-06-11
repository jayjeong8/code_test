//ROT13 = 영어 알파벳을 13글자씩 밀어서 만든다.
//알파벳 대문자, 소문자, 공백, 숫자로만 이루어진 문자열 S가 주어진다.
//알파벳(대문자와 소문자)만 ROT13을 적용한다.
//s의 길이는 100을 넘지 않는다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('');

const ans = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

input.forEach(c => {
    if (/[a-z]/.test(c)) {
        const letter = ((c.charCodeAt(0) - 97) + 13) % 26;
        ans.push(alphabet[letter]);
    } else if (/[A-Z]/.test(c)) {
        const letter = ((c.charCodeAt(0) - 65) + 13) % 26;
        ans.push(alphabet[letter].toUpperCase());
    } else {
        ans.push(c);
    }
})

console.log(ans.join(''));