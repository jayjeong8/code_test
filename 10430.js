//세 수 A,B,C가 주어졌을 때 4가지 값을 구해서 출력하는 프로그램 작성

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const [A,B,C] = input;

ans = [];

ans.push((A+B)%C);
ans.push(((A%C)+(B%C))%C);
ans.push((A*B)%C);
ans.push(((A%C)*(B%C))%C);

console.log(ans.join('\n'));