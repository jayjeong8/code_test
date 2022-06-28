//부분수열의 합
//N개의 정수로 이루어진 수열이 있을 때, 크기가 양수인 부분수열 중에서(원소가 1개 이상 있어야함)
//그 수열의 원소를 다 더한 값이 S가 되는 경우의 수를 구하는 프로그램을 작성

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);


let ans = 0;

//부분집합 {1,3,5}를 101010 으로 나타낼 수 있다. 2진법의 각 자릿수를 원소값으로 생각하는 것이다.
//원소가 1개 이상 있어야 하기 때문에(공집합x) i는 1부터 시작한다.
//1<<N 로 모든 부분집합을 나타낼 범위를 만들 수 있다. (부분집합의 개수는 2^N과 동일하다)
for (let i = 1; i < (1 << N); i++) { //1<<N은 N만큼 왼쪽으로 이동한 것(시프트연산) ex)1<<3 = 1000, 1000 - 1 = 111 (2진법)
    //console.log(i) //문제 테케 기준으로 i : 1~31
    let sum = 0;
    for (let j = 0; j < N; j++) {
        if ((i & (1 << j)) != 0) {
            sum += numbers[j];
        }
    }
    if (sum === S) {
        ans++;
    }
}
console.log(ans);