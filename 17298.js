//오큰수:오른쪽에 있는데 확인 중인 넘버보다 더 큰 수중 가장 가까이 있는 수(가장 왼쪽에)
//해당 인덱스 이후부터 수를 검색해서 더 큰게 나오면 반환

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

//number로 바꾸지 않으면 사전상 정의로 비교된다. 2 > 10
const nums = input[1].split(' ').map(Number);
const ans = [];

for (let i=0; i<input[0]; i++){
    for(let j=i+1; j<input[0]; j++){
        if(nums[i] < nums[j]){
            ans.push(nums[j]);
            break;
        } else if(j===input[0]-1){
            ans.push(-1);
        }
    }
    i===input[0]-1 && ans.push(-1);
}

console.log(ans.join(' '));