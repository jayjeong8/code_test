//N과 M 2
//오름차순으로 중복없이! 수열 고르기 (조합) (1,2와 2,1은 같다.)

const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const visited = new Array(N + 1);
const array = [];
let result = '';

dfs(1,0);
console.log(result);

function dfs(idx, count) {
    if (count === M) {
        result += `${array.join(' ')}\n`;
    }

    for (let i = idx; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            array.push(i);
            dfs(i + 1, count + 1);
            array.pop();
            visited[i] = false;
        }
    }
}