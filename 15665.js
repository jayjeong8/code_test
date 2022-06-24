//N과 M 11
//같은 수를 여러번 골라도 된다. 입력 수는 중복으로 들어온다. 출력은 중복 없이 한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = [];
const array = [];

dfs(0);

const resultSet = [...new Set(result)];
console.log(resultSet.join('\n'));

function dfs(count) {
    if (count === M) {
        result.push(array.join(' '));
        return;
    }

    for (let i = 0; i < N; i++) {
        array.push(nums[i]);
        dfs(count + 1);
        array.pop();
    }
}