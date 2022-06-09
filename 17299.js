//등장한 횟수가 더 많은 오른쪽에서 가까운 수
//수열의 최대 크기는 백만

//각 수의 등장 횟수를 담은 어레이numsF를 만들어서 비교 후 해당 인덱스를 가진 원본을 정답에 추가

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map(Number);
//테스트 값
// const n = 10;
// const nums = [100,100,2,2,987,30,30,2,100,1];

const result = new Array(n).fill(-1);

//numsF를 어레이로 만들면 식만 더 복잡해지고 시간초과가 나온다.
const numsF = {};
nums.forEach((x) => numsF[x] ? numsF[x]++ : numsF[x] = 1);

const index = [];

for (let i = 0; i < n; i++) {
    while(index.length && numsF[nums[index[index.length-1]]] < numsF[nums[i]]) {
        result[index.pop()] = nums[i];
    }
    index.push(i);
}

console.log(result.join(' '));


