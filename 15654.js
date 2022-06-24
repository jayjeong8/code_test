//N과 M 5
//N개의 서로 다른 수를 받아서 길이가 M인 수열을 만들기, 수열은 오름차순이어야 한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a,b) => a-b);

let visited = new Array(N).fill(false);
let array = [];
let result = '';

dfs(0);
console.log(result);

function dfs(count) {
    if (count === M) {
        result += `${array.join(' ')}\n`;
    }
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            array.push(nums[i]);
            dfs(count + 1);
            array.pop();
            visited[i] = false;
        }
    }
}
