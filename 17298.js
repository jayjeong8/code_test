//오큰수:오른쪽에 있는데 확인 중인 넘버보다 더 큰 수중 가장 가까이 있는 수(가장 왼쪽에)
//해당 인덱스 이후부터 수를 검색해서 더 큰게 나오면 반환
//for문 중복으로 풀면 length가 최대 백만이라서 백만제곱이 되기 때문에 시간초과가 나온다.
//O(n)이 가능한 아래 식으로 인덱스를 따로 보관해서 해결한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

//number로 바꾸지 않으면 사전상 정의로 비교된다. 2 > 10
const nums = input[1].split(' ').map(Number);
//더 큰값을 찾을 수 없는 상태인 -1을 디폴트로 채워놓는다.
const result = new Array(+input[0]).fill(-1);
let index = []; //비교하는 수의 인덱스가 들어가고, 비교가 되고나면 삭제된다.

for(let i=0; i < input[0]; i++){
    //바로 오른쪽에서 수를 찾지 못하면 index에 i를 계속 push해주면서 수를 찾지 못한 인덱스를 모아놓는다.
    //인덱스가 남아있고 && nums의 마지막 index를 넣은 값과 현재 for문이 가리키는 nums[i]의 값을 비교한다.
    while (index.length && nums[index[index.length-1]] < nums[i]) {
        //큰수를 찾은 index는 빼주고 결과를 result에 넣어준다.
        result[index.pop()] = nums[i];
    }
    index.push(i);
}

console.log(result.join(' '));



