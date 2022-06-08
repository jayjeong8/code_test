//스택 수열
//1부터 n까지의 수를 스택에 넣었다가 뽑아서 늘어놓음으로써 하나의 수열을 만들 수 있다.
//스택에 "push하는 순서"는 반드시 오름차순을 지키도록 한다. 1부터 차례로 넣어야함
//임의의 수열이 주어졌을 때 스택을 이용하여 그 수열을 만들 수 있다면
//어떤 순서로 push와 pop을 수행해야하는지 알아내는 프로그램을 작성하라
//첫번째줄은 n의 개수, 그 아래는 n을 구성하는 무작위 순서의 숫자

//순서대로 넣는 중+에 마지막 값이 정답 배열의 첫번째 값과 일치하면 -

const n = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);
const nums = n.splice(1);
const pushPop = [];
let ans = '';

for(let i=1; i<=n[0]; i++){
    pushPop.push(i);
    ans+= '+\n';

    while (pushPop[pushPop.length-1] === nums[0] && nums.length) {
        pushPop.pop();
        nums.shift();
        ans+= '-\n';
    }
}

console.log(nums.length ? 'NO' : ans);

