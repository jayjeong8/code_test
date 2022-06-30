//연결 요소의 개수 - 방향 없는 그래프가 주어졌을 때 연결요소의 개수를 구하는 프로그램을 작성하시오
//연결요소 - 전체 그래프 안에서 끊기지않고 요소가 이어지는 것들의 개수

const [nums, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = nums.split(' ').map(Number); //정점의개수, 간선의 개수

const adjList = new Array(N + 1);
const visited = new Array(N + 1).fill(false);

//adjList를  new Array().fill([])로 만들고 아래 cases.forEach에서 스프레드 연산자로 넣어주면 메모리 초과가 발생한다..
//**하나씩 빈 배열을 넣어주고 push로 넣기**
//const adjList = [...new Array(N + 1)].map(()=>[]); 아니면 adjList를 이렇게 정의하기
for (let i = 0; i < adjList.length; i++) {
    adjList[i] = [];
}

cases.forEach(v => {
    const [a, b] = v.split(' ').map(Number);
    adjList[a].push(b);
    adjList[b].push(a);
});

//시작부터 각 노선을 도는데 이미 방문했던 곳은 돌지말고 모든 노선에서 시작해보기.
//하나 돌때마다 아직 방문하지 않았다면 카운트

let count = 0;
for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        count++;
    }
}
console.log(count);

//dfs
function dfs(vertex) {
    visited[vertex] = true;

    //인접리스트를 차례로 돌며 방문하지 않은 정점 방문
    adjList[vertex].forEach(v => {
        if (!visited[v]) {
            dfs(v);
        }
    });
}