//토마토 - 토마토는 격자 모양 상자의 칸에 하나씩 넣어서 창고에 보관한다.
//토마토가 보관된지 하루가 지나면 익은 토마토 인접한 곳에 있는 안익은 토마토들은 익은 토마토의 영향을 받아 익게 된다. (상하좌우 네방향)
//보관된 토마토 중 안익은 토마토는 혼자 익지 않고 이미 익은 토마토의 영향에 의해서만 익는다고 가정하자.
//토마토가 안들어있는 칸이 있을 수도 있다. 며칠이 지나면 토마토가 모두 익는지 최소 일수를 구하는 프로그램을 작성하라.
//1은 익은 토마토, 0은 안익은 토마토, -1은 해당 칸에 토마토 없음
//토마토가 없는 칸이 가로막는 등 토마토가 모두 익을 수 없는 상황이면 -1을 출력한다. 이미 다 익은채로 시작했으면 0


const [nums, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M, N] = nums.split(' ').map(Number); //가로, 세로
const tomato = cases.map(t => t.split(' ').map(Number));

const moveRow = [1, -1, 0, 0];
const moveCol = [0, 0, -1, 1];

// const visited = []; 메모리초과가 나와서 visited배열이 없는 버전을 참고하여 수정하였다.
//참고 : https://nyang-in.tistory.com/236?category=855466

const riped = []; //토마토가 며칠째에 익었는지 표시하는 배열, 방문하지 않은 토마토는 0, 토마토 없으면 -1이 된다. (하단쪽 코드 참고)
for (let i = 0; i < N; i++) {
    riped.push(new Array(M).fill(0));
}

const isInBox = (row, col) => {
    return row >= 0 && row < N && col >= 0 && col < M;
}

const BFS = (queue) => { //1인 토마토에서 시작하게 넘어온다.

    //방문해서 토마토 있는데 안익었으면 이전 숫자 + 1
    let number = 0;
    while (number !== queue.length) {
        const [curRow, curCol] = queue[number];

            for (let n = 0, length = moveRow.length; n < length; n++) {
                const nextRow = curRow + moveRow[n];
                const nextCol = curCol + moveCol[n];

                if (isInBox(nextRow, nextCol) && !tomato[nextRow][nextCol] && !riped[nextRow][nextCol]) {
                    queue.push([nextRow, nextCol]);
                    riped[nextRow][nextCol] = riped[curRow][curCol] + 1;
                    answer = riped[nextRow][nextCol];
                }
            }
        number++;
    }
    answer -= 1; //첫날은 0일인데 여기서는 방문하지않은 안익은 토마토를 0으로 구분하기 때문에 1로 시작했다. 그러므로 -1;
}

let answer = 0;
let zero = false;
const queue = [];

//**토마토가 있는 칸부터 "큐"에 넣어놓기**
//바로 BFS를 실행시키면 먼저 등장한 토마토가 있는 칸부터 점차 퍼져나간다.
//하지만 등장한 토마토를 큐에 먼저 넣어놓고 실행시키면 토마토가 있는 칸에서 각각 퍼져나가듯이 공평하게 진행할 수 있다.

for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
        if (tomato[row][col] === 1) {
            queue.push([row,col]);
            riped[row][col] = 1;
        } else if (tomato[row][col] === -1) {
            riped[row][col] = -1;
        } else if (tomato[row][col] === 0) {
            zero = true; //익은 토마토만 들어왔을 경우 0일이 걸리므로 0이 하나라도 있는지 체크하고 없다면 zero는 false로 남아서 0을 답으로 출력하게 한다.
        }
    }
}


if(!zero) {
    answer = 0;
} else {
    BFS(queue);

    for (let i=0; i < N; i++) {
        if(riped[i].includes(0)) {
            answer = -1;
            break;
        }
    }
}

console.log(answer);
