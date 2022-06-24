//N과 M 7
//같은 수를 여러번 골라도 된다.
//오름차순 출력

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = '';
const array = [];

dfs(0);
console.log(result);

function dfs(count) {
    if(count === M) {
        result += `${array.join(' ')}\n`;
        return;
    }

    for(let i = 0; i < N; i++){
        array.push(nums[i]);
        dfs(count + 1);
        array.pop();
    }
}