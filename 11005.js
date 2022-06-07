//10진법수 N을 B진법으로 바꿔서 출력한다.
//A:10~
//N(10진법수)과 B(진법수)가 주어진다.
// 답안에 대문자가 있을 경우 대문자로 출력한다.

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [value, notation] = input.map(Number);

console.log(value.toString(notation).toUpperCase());