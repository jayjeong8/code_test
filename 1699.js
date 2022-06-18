//어떤 자연수 N은 그보다 작거나 같은 제곱수들의 합으로 나타낼 수 있다. (1의 제곱 포함)
//제곱수들의 항의 최소개수를 구하는 프로그램 작성하기 ex) 3(2)+1(2)+1(2) = 3개항 (괄호가 지수)

const input = require('fs').readFileSync('/dev/stdin');
const N = Number(input);

//함수 실행
sum_sqrt(N);

function sum_sqrt(n) {
    //0부터 N까지 길이의 배열을 만든다.
    const arr = new Array(n+1).fill(0);

    for(let i = 1; i <= N; i++){
        arr[i] = i;
        //i 안에 들어있는 제곱수(j*j)를 구해주고, i에서 제곱수를 빼고 1을 더해(한단계 전이니까) arr[i]에 들어있는 값과 비교한다.
        //i보다 작은 모든 제곱수를 비교하여 최솟값을 저장한다.
        for(let j=1; j*j <= i; j++){
            arr[i] = Math.min(arr[i], arr[i-j*j] + 1);
        }
    }
    console.log(arr.pop());
}