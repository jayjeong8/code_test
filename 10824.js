//네수, 4개의 자연수 A,B,C,D가 주어진다.
//A와 B를 일렬로 붙인 수와 B와 D를 일렬로 붙인 수의 합을 구하는 프로그램 작성.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const [A, B, C, D] = input;

console.log(Number(A+B) + Number(C+D));
