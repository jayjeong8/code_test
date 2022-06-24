//N과 M 8
//같은 수를 여러번 골라도 된다. 고른 수열은 비내림차순으로 구성되어야 한다. (수열에 넣는 현재 수가 앞에 넣은 수보다 같거나 큼)

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);


let result = '';
const array = [];

dfs(0,0);
console.log(result);

function dfs(count, idx) {
    if (count === M) {
        result += `${array.join(' ')}\n`;
        return;
    }

    for(let i=idx; i<N; i++){
        array.push(nums[i]);
        dfs(count + 1, i);
        array.pop();
    }
}