//nodejs에서는 메모리 초과로 못푸는 문제. 계수정렬(counting sort) 참고용

const input = require('fs').readFileSync('/dev/stdin', "utf8").trim().split('\n');

//input에서 나올 수 있는 최대 수+1(배열이 0에서 시작하니까) 크기의 0으로 채워진 배열을 만든다.
let arr = Array.apply(null, Array(10001)).map(()=> 0);

let skip = 1;
for(let i of input) {
    //N의 개수를 알려주는 첫번째 값을 패스한다.
    if (skip) {
        skip = 0;
        continue;
    }
    arr[parseInt(i)]++;
}

for(let i=0; i<arr.length; i++){
    while(arr[i]--) console.log(i);
}