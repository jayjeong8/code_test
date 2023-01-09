// 문제 링크: https://www.hackerrank.com/challenges/bfsshortreach/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'bfs' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. 2D_INTEGER_ARRAY edges
 *  4. INTEGER s
 */


function bfs(n, m, edges, s) {
    // new Array.fill([])로 만들면 모든 배열이 같은 배열로 처리되는 문제가 생긴다.
    const edgeMap = Array.from({length:n + 1},()=>[]);
    // 각 엣지는 양방향이므로 서로의 배열에 추가힌다.
    for(const [x, y] of edges) {
        edgeMap[x].push(y);
        edgeMap[y].push(x);
    }

    // 방문 중복을 막기 위해 Set으로 목록을 만든다.
    let current = new Set([s]);
    // 모든 노드가 가는 길이 없다고 가정(-1)하고 길이 확인될 때 마다 값을 바꾼다.
    const dp = new Array(n + 1).fill(-1);
    //이전 노드를 기준으로 6씩 더해 길을 측정하기 때문에 start를 0으로 바꾼다.
    dp[s] = 0;

    while (current.size > 0) {
        // 다음 노드를 저장한다.
        const next = new Set();
        // current에 있는 노드를 하나씩 꺼내서 엮인 노드를 확인한다.
        // current를 하나씩 shift할 필요 없이 for of로 전부 확인한 다음 current를 next로 바꾼다.
        for (const x of current) {
            for (const y of edgeMap[x]) {
                // 방문한 적 없는 노드만 next에 추가한다.
                if(dp[y] === -1){
                    dp[y] = dp[x] + 6;
                    next.add(y);
                }
            }
        }
        current = next;
    }

    //start와 0은 답에 포함하지 않아야 한다.
    dp.splice(s, 1);
    return dp.slice(1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().replace(/\s+$/g, '').split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine().trim(), 10);

        const result = bfs(n, m, edges, s);

        ws.write(result.join(' ') + '\n');
    }

    ws.end();
}
