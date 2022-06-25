//차이를 최대로
//배열의 순서를 적절하게 조작해서 아래의 식의 최댓값을 구하는 프로그램을 작성하기
//|A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]| // Math.abs(첫번째수-두번째수), 두번째수-세번째수...


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input[0]);
const cases = input[1].split(' ').map(Number);

const arr = [];
const visited = new Array(N).fill(false);
let max = 0;

dfs(0);
console.log(max);

//모든 종류의 배열 만들기(수가 겹치지않는 N,M시리즈 생각해보기)
function dfs(count) {
    if(count === N){
        calcFn(arr);
        return;
    }
    for(let i = 0; i < N; i++){
        if(!visited[i]){
            visited[i] = true;
            arr.push(cases[i]);
            dfs(count + 1);
            arr.pop();
            visited[i] = false;
        }
    }
}

//배열마다 식에 대입해서 최대값 구해보기

function calcFn(arr){
    let sum = 0;
    for(let i = 0; i < N - 1; i++){
        sum += Math.abs(arr[i] - arr[i+1]);
    }
    max = Math.max(max, sum);
}