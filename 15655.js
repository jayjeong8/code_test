//N과 M 6
//수열은 오름차순이어야 한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = '';
const array = [];
const visited = new Array(N).fill(false);

dfs(0, 0);
console.log(result);

function dfs(count, idx) {
    if (count === M) {
        result += `${array.join(' ')}\n`;
        return;
    }

    for (let i = idx; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            array.push(nums[i]);
            dfs(count + 1, i + 1);
            array.pop();
            visited[i] = false;
        }
    }
}