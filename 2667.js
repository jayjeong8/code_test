//단지번호 붙이기 - 1은 집이 있는 곳을, 0은 집이 없는 곳을 나타낸다.
//연결된 집의 모임인 단지를 정의. 단지에 번호를 붙이려한다. 어떤 집이 좌우 혹은 아래 위로 붙어있는 집을 연결된 집이라고 한다.
//단지수를 출력하고, 각 단지에 속하는 집의 수를 오름차순으로 정렬하여 출력하라.


//참고 https://nyang-in.tistory.com/234
//moveRow = [0, 0, 1, -1] , moveCol = [1, -1, 0, 0] 배열로 움직임을 표현한다.
//위 배열 설명: 현재 (2,2)에 위치한다면 오른쪽 이동은 (2,3), 왼쪽 이동은 (2,1), 아래쪽 이동은 (3,2), 위쪽 이동은 (1,2)를 말한다.
//현재 좌표를 (row,col)이라고 하면 ((row+moveRow[n]), (col+moveCol[n]))을 다음 탐색 대상으로 정해준다.
//주의해야할 점! 주어진 지도는 N*N의 형태이기 때문에 행과 열이 0보다 작거나 N을 넘어서면 범위를 넘어가게 된다.
//값이 1이 아니거나(0) 방문한 적이 있다면 탐색할 필요가 없기 때문에 visited 배열을 만들어준다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input.shift());
const cases = input.map(e => e.split('').map(Number));

//방문 확인 배열 만들기
const visited = [];
for (let i = 0; i < N; i++) {
    visited.push(new Array(N).fill(0));
}

//오른쪽왼쪽아래쪽위쪽
const moveRow = [0, 0, 1, -1];
const moveCol = [1, -1, 0, 0]

//범위 체크 함수 (0보다 '같거나' 크고 N '미만')
const rangeCheck = (row, col) => {
    if (row >= 0 && row < N && col >= 0 && col < N) {
        return true;
    }
    return false;
}

//DFS 함수
const DFS = (row, col) => { //row와 col이 N*N지도를 벗어나지 않음 + cases에 대입한 값이 0이 아닌 1임 + 방문한적 없음
    if (rangeCheck(row, col) && cases[row][col] && !visited[row][col]) {
        visited[row][col] = 1;
        number++; //함수 바로 아래쪽에 정의되어 있음
        for (let n = 0; n < moveRow.length; n++) { //상하좌우에 값이 들어가고 다시 DFS가 실행되면 3가지(범위, 0이나1, 방문)를 체크한다.
            DFS(row + moveRow[n], col + moveCol[n]);
        }
    }
}

//BFS 함수
const BFS = (row, col) => {
    const queue = [];
    queue.push([row, col]);
    while (queue.length) {
        const target = queue.shift();
        row = target[0];
        col = target[1];
        if (visited[row][col] === 0) {
            visited[row][col] = 1;
            number++;
            for (let n = 0; n < moveRow.length; n++) { //BFS는 재귀대신 큐에 넣어서 동작을 반복하기 때문에 상하좌우 넣은 것을 if문으로 검사해서 큐에 넣는다
                if (rangeCheck(row + moveRow[n], col + moveCol[n]) && cases[row + moveRow[n]][col + moveCol[n]]) {
                    queue.push([row + moveRow[n], col + moveCol[n]]);
                }
            }
        }
    }
}

//코드 실행
const complex = [];
let number = 0;

for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
        if (cases[row][col] && !visited[row][col]) { //1인지와 방문 여부 확인
            // DFS(row, col); //DFS로 실행시
            BFS(row, col); //BFS로 실행시
            complex.push(number); //윗줄에서 실행시킨 DFS와 모든 재귀가 끝이 나면 number에 한 단지의 수가 들어간다.
            //이후 이 for문의 다음번이 실행되면서 방문하지 않은 1을 돌며 다음 단지를 세어 number에 넣어야하기 때문에 number를 초기화한다.
            number = 0;
        }
    }
}
complex.sort((a, b) => a - b); //각 단지마다의 수는 오름차순으로 출력해야 한다.
console.log(complex.length + '\n' + complex.join('\n'));