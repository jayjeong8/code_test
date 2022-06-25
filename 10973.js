//이전 순열 구하기


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input[0]);
const checkArr = input[1].split(' ').map(Number);

solution(N, checkArr);

function solution(n, arr) {
    const sortedArr = [...arr].sort((a, b) => a - b);
    if (arr.every((e, i) => e === sortedArr[i])) {
        console.log(-1);

    } else {
        //뒤에서부터 조사해서 오름차순이 나오면 바꾸고 오름차순이 아니면 오름차순이 될 때 까지 앞쪽으로 이동한다.
        let i = n - 2;
        while (arr[i] < arr[i + 1]) i--;

        //오름차순으로 발견한 i의 오른쪽에 있는 수 중에 i보다 작은 수 중 가장 큰 수 j 를 찾는다.
        let j = n - 1;
        while (arr[i] < arr[j]) j--;

        //i와 j의 위치를 바꾼다.
        [arr[i], arr[j]] = [arr[j], arr[i]];
        //[0부터 i전까지의 수, i(j였던 i), i 뒤로 있는 수의 내림차순 정렬]
        console.log([...arr.slice(0, i), arr[i], ...arr.slice(i + 1).sort((a, b) => b - a)].join(' '));
    }
}