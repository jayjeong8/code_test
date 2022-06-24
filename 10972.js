//다음 순열

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input[0]);
const checkArr = input[1].split(' ').map(Number);

solution(N, checkArr);

function solution(n, arr) {
    //N으로 시작하는 내림차순의 수는 마지막 순열이다. = 뒤에서부터 오름차순이 안끊기면 -1이라는 뜻
    const arrCopy = [...arr].sort((a, b) => b - a); //모든 수를 내림차순으로 정렬 복사해놓고,
    if (arr.every((e, i) => e === arrCopy[i])) { //원본 배열 값과 비교해서 전부 같으면 마지막 값이므로 -1;
        console.log(-1);
    } else {
        //뒤에서부터 오름차순이 깨지는 부분의 인덱스 i를 구한다.
        let i = n - 2; //배열은 0부터 시작해서 -1, i+1과 비교해야해서 -1, 총 -2;
        while (arr[i] > arr[i + 1]) { //맨뒤에서 하나 앞 값과 맨 뒤값 비교로 시작하고 뒤에서 오름차순이면 i--로 앞쪽 숫자로 이동하여 비교한다.
            i--;
        }
        //위에서 while이 끝나 i의 값이 정해졌다.
        //i보다 뒤에있는 j들은 뒤에서부터 오름차순(뒤가 더 작음)이기 때문에 j로 뒤부터 비교해서 i 뒤의 수 중에 i보다 큰 수 중 가장 작은 j를 찾는다.
        let j = n - 1;
        while (arr[i] > arr[j]) {
            j--;
        }
        //i와 j를 찾았으니 i와 j의 자리를 바꾼다.
        [arr[i], arr[j]] = [arr[j], arr[i]];
        //바뀐 i번째 수 뒤에있는 숫자를 오름차순으로 정렬한다.
        console.log([...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => a - b)].join(' '));
    }
}