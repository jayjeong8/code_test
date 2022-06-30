//이분 그래프 - 그래프의 정점(vertex)의 집합을 둘로 분할하여, 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있는 그래프.
//그래프가 입력으로 주어졌을 때 이 그래프가 이분그래프인지 아닌지 판별하는 프로그램 작성하기.

const [inputK, ...inputCases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const cases = inputCases.map(e => e.split(' ').map(Number));

let visited = [];
let adjList = [];
let checkList = [];

let flag;
const answer = [];

for (let i = 0, n = cases.length; i < n; i += cases[i][1] + 1) {
    const [V, E] = cases[i];

    adjList = [...new Array(V + 1)].map(() => []);
    checkList = [...new Array(V + 1)].map(() => []);
    visited = new Array(V + 1).fill(false);

    for (let j = i + 1; j <= i + E; j++) {
        const [a, b] = cases[j];
        adjList[a].push(b);
        adjList[b].push(a);
    }

    flag = true; //테스트케이스 여러개가 들어오고 전부 이 for문 안에서 실행되기 때문에 매 i마다 true로 리셋해줘야 한다. 위 List들과 visited도 동일

    for (let i = 1; i <= V; i++) {
        if (!visited[i]) {
            visited[i] = 1;
            bfs(i);
        }
    }

    if (flag) {
        answer.push('YES');
    } else {
        answer.push('NO');
    }

}

console.log(answer.join('\n'));

function bfs(v) {
    const willVisit = [v];

    while (willVisit.length) {
        const checkV = willVisit.shift();

        adjList[checkV].forEach(e => {
            if (!visited[e]) {
                if (visited[checkV] === 1) {
                    visited[e] = 2;
                } else {
                    visited[e] = 1;
                }
                willVisit.push(e);
            } else if (visited[checkV] === visited[e]) { //e를 미이 방문했는데 현재 넘버와 같으면 NO
                flag = false;
                return;
            }
        })
    }
}
