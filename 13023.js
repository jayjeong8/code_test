//ABCDE
//알고리즘 캠프에는 총 N명이 참가하고 있다. 0번부터 N-1번으로 번호가 매겨져있고 일부 사람들은 친구이다.
//입력으로 들어온 친구관계가 문제로 주어진 친구관계에 성립하는지 아닌지 구해서 있으면 1 없으면 0을 출력한다.
//A와 B는 친구다. B와 C는 친구다. C는 D와 친구다. D는 E와 친구다.

const [nums, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [peopleN, friendN] = nums.split(' ').map(Number);
const friendCases = cases.map(e => e.split(' ').map(Number));

const adjList = new Array(peopleN).fill([]); //인접리스트
const check = new Array(peopleN).fill(false);
let result = 0; //결과 출력이 0이나 1로 되어야 한다.

//친구관계가 성립되는 것을 찾는 문제라 무방향이기에 인접리스트에 a->b, b->a 관계를 각각 넣어준다.
for (let i = 0; i < friendN; i++) {
    const [a, b] = friendCases[i];
    adjList[a] = [...adjList[a], b]; //push로 넣으면 얕은 복사라서 모든 배열이 동일해진다.
    adjList[b] = [...adjList[b], a];
}

//맨처음 시작할 사람을 골라준다.
for (let i = 0; i < peopleN; i++) {
    dfs(i, 0);
}
console.log(result); //결과 출력


//dfs
function dfs(node, count) {
    if (result) return; //이미 조건을 만족한 상태면 빠르게 재귀를 종료한다.

    check[node] = true; //노드 L을 방문한다.

    if (count === 4) { //친구가 성립할때만 카운트가 올라가고 문제에서 주어진 관계 케이스가 4개 이므로 count === 4;
        result = 1;
        return;
    }

    //현재 노드의 인접리스트(adjList[node]) 길이를 이용한다.
    for (let i = 0, n = adjList[node].length; i < n; i++) {
        const next = adjList[node][i]; //현재 검사하는 사람과 친구인 사람
        if (!check[next]) {
            dfs(next, count + 1);
        }
    }
    check[node] = false;
}


