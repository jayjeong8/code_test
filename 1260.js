//그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하기.
//1부터 N까지의 정점 중, 방문할 수 있는 정점이 여러개인 경우에는 정점번호가 작은 것을 먼저 방문하고, 방문할 수 있는 점이 없는 경우 종료한다.

const [nums, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, V] = nums.split(' ').map(Number); //정점의개수, 간선의 개수, 탐색을 시작할 정점의 번호
const lines = cases.map(e => e.split(' ').map(Number));

const adjList = new Array(N + 1).fill([]);
const visited = new Array(N + 1).fill(false);

const dfsResult = [];
const bfsResult = [];

//인접리스트에 각 노드 넣어주기 (양방향)
for (let i = 0; i < M; i++) {
    const [a, b] = lines[i];
    adjList[a] = [...adjList[a], b];
    adjList[b] = [...adjList[b], a];
}

//작은 정점을 먼저 방문하기 위해 정렬해주기 **숫자가 1부터 시작하므로 1부터 N까지 모두 정렬해주어야 한다.
for (let i = 1; i <= N; i++) {
    adjList[i] = adjList[i].sort((a, b) => a - b);
}

//코드 실행
dfs(V);
visited.fill(false); //방문 확인 배열 초기화
bfs(V);

//결과 출력
console.log(dfsResult.join(' ') + '\n' + bfsResult.join(' '));


function dfs(vertex) {
    visited[vertex] = true;
    dfsResult.push(vertex);
    
    //인접리스트를 차례로 돌며 방문하지 않은 정점 방문
    adjList[vertex].forEach(v => {
        if (!visited[v]) {
            dfs(v);
        }
    });
}

function bfs(vertex) {
    const willVisit = [vertex]; //첫번째 방문할 값 V를 넣어준다.
    let checkV;

    while (willVisit.length !== 0) {

        checkV = willVisit.shift(); //큐, 넣은 값을 앞에서부터 체크한다.
        
        if (visited[checkV]) { //이미 방문했으면 건너뛴다.
            continue;
        }

        visited[checkV] = true;
        bfsResult.push(checkV);

        adjList[checkV].forEach(v => { //현재값의 인접리스트에 들어있는 노드들을 willVisit 큐에 추가해준다.
            if (!visited[v]) {
                willVisit.push(v);
            }
        });
    }
}
