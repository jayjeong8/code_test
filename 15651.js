//N과 M 3
//1부터 N까지 자연수 중에서 M개를 고른 수열, 같은 수를 여러번 골라도 된다.(visited Array 없어도 됨)

const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let result = '';
let arr = [];

dfs(0);
console.log(result);

function dfs(count) {
    if (count === M) {
        result += `${arr.join(' ')}\n`;
        return;
    }

    for (let i = 1; i <= N; i++) {
        arr.push(i);
        dfs(count + 1);
        arr.pop();
    }
}

/* 풀이 2 (메모리 더쓰고 시간 덜쓰는 풀이)

const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let result = '';

dfs(0, '');
console.log(result);

function dfs(count, value) {
    if (count === M) {
        result += `${value}\n`;
        return;
    }

    for (let i = 1; i <= N; i++) {
        dfs(count + 1, value + i + ' ' );
    }
}*/
