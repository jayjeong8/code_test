//모든 순열
//N이 주어졌을 때 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하기

const input = require('fs').readFileSync('/dev/stdin');
const N = Number(input);

const visited = new Array(N + 1).fill(false);
const result = [];
const array = [];

dfs(0);
console.log(result.join('\n'));

function dfs(count) {
    if (count === N) {
        result.push(array.join(' '));
        return;
    }

    for (let i = 1; i <= N; i++) {
        if(!visited[i]) {
            visited[i] = true;
            array.push(i);
            dfs(count + 1);
            array.pop();
            visited[i] = false;
        }
    }
}

