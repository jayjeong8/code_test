const input = require('fs').readFileSync('/dev/stdin');
let N = Number(input);

//원반갯수, 출발지, 목적지, 나머지
let result = '';
let testNums = 0;

function hanoi(num, from, to, other){
    if (num === 0) return;
    testNums++;
    hanoi(num-1, from, other, to); //제일먼저 result에 들어감. 7개의 결과중 1-3까지
    result.length > 1 ? result+=`\n${from} ${to}` : result=`${from} ${to}`; //결과 4 (N===3 기준으로 가장 아래 쌓일 블록의 움직임)
    hanoi(num-1, other, to, from); // 옆으로 옮겨놨던 블록을 다시 가져옴 5-7의 움직임
}

hanoi(N, 1, 3, 2);
console.log(`${testNums}\n${result}`);