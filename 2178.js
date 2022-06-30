//미로 탐색  - N*M 크기의 배열로 표현되는 미로, 1은 길 0은 벽
//1,1에서(0,0) 출발하여 N,M의 위치로 이동할때 지나야하는 최소의 칸 수를 수하라. (시작위치와 도착위치 포함)
//row col이 0,0 으로 시작하고 현재 좌표가 N,M일 때의 넘버를 반환해놓기


const [nums, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = nums.split(' ').map(Number);
const miro = cases.map(e => e.split('').map(Number));

const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0];

const visited = [];
const path = []; //지나온 길의 합계를 알기 위해 path를 만들어준다.
for (let i = 0; i < N; i++) {
    visited.push(new Array(M).fill(0));
    path.push(new Array(M).fill(0));
}

const isInMiro = (row, col) => {
    return row >= 0 && row < N && col >= 0 && col < M;
}


//두 지점간의 최단 경로를 탐색할때는 bfs가 좋다. bfs는 가중치가 없는 간선간의 최단거리를 보장한다. (dfs는 근소하게 정답과 차이난다.틀린 시도.)
//FIFO이기 때문에 간선의 수가 작은 곳 부터 먼저 처리된다.
const bfs = (row, col) => {
    const queue = [[row, col]];
    path[row][col] = 1;

    while (queue.length) {
        const [curRow, curCol] = queue.shift();

        if (!visited[curRow][curCol]) {
            visited[curRow][curCol] = 1;

            for (let n = 0; n < moveRow.length; n++) {
                const nextRow = curRow + moveRow[n];
                const nextCol = curCol + moveCol[n];

                //조건문에 && !visited[nextRow][nextCol]가 없으면 오답, 방문한 곳에 숫자가 덮어씌워지는 것 같다.
                if (isInMiro(nextRow, nextCol) && miro[nextRow][nextCol] && !visited[nextRow][nextCol]) {
                    queue.push([nextRow, nextCol]);
                    path[nextRow][nextCol] = path[curRow][curCol] + 1;
                }
            }
        }
    }
}

bfs(0, 0);
console.log(path[N-1][M-1]);
