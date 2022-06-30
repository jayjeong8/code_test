//섬의 개수
//가로 세로 대각선으로 연결된 땅만큼 하나의 섬으로 본다. 
//입력은 여러개의 테스트 케이스로 이루어져 있으며 각 테스트 케이스의 첫째 줄에는 지도의 너비와높이가 주어진다. 
//둘째줄부터 높이만큼의 줄에는 지도가 주어진다. 모든 테스트케이스를 지나 입력의 가장 마지막 줄에는 0이 두개 주어진다. 
//단지번호붙이기에 대각선 포함된 버전 2667 참고
//(2,2)가 기준점이라면 (2,3) (2,1) (1,2) (3,2) 동서남북 뿐만 아니라 대각선으로(1,1) (1,3) (3,1) (3,3)도 가능하다. 왼위 오위 왼아래 오아래

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const cases = input.map(e => e.split(' ').map(Number));

const moveRow = [0, 0, -1, 1, -1, -1, 1, 1];
const moveCol = [1, -1, 0, 0, -1, 1, -1, 1];

let number = 0;
let island = [];

const answer = [];

for (let i = 0, n = cases.length - 1; i < n; i += cases[i][1] + 1) { //각 테스트케이스로 이동
    const [w, h] = cases[i];

    const visited = [];
    for (let j = 0; j < h; j++) {
        visited.push(new Array(w).fill(0));
    }

    const isInMap = (row, col) => {
        if (row >= 0 && row < h && col >= 0 && col < w) {
            return true;
        } else {
            return false;
        }
    }

    const makeRow0 = i+1; //row값은 0이 아닌 i+1에서 시작하므로 초기화용 변수를 만들어줬다.

    //DFS 함수
    const DFS = (row, col) => {
        if (isInMap(row - makeRow0, col) && !visited[row - makeRow0][col] && cases[row][col]) {
            visited[row - makeRow0][col] = 1;
            number++;

            for (let n = 0; n < moveRow.length; n++) {
                DFS(row + moveRow[n], col + moveCol[n]);
            }
        }
    }

    //BFS 함수
    const BFS = (row,col) => {
        const queue = [[row,col]];
        
        while(queue.length){
            const [checkRow, checkCol] = queue.shift();

            //처음에 아래 조건문을 사용하지 않고 더 아래 for문 안의 조건문에서 걸러진 다음 가게 했더니 시간초과가 나왔다.
            //현재 방문여부랑 상관 없이 8번(moveRow.length)씩 매번 돌아서 시간초과가 된 것 같다.
            //이미 방문했다면 근처를 조사했을테니 다시 조사하면서 각각의 8개의 경우가 방문했는지 아닌지 확인하는 것 보다
            //지금 한번이 방문인지 아닌지를 확인하는 것이 시간복잡도를 줄이는 것에 좋다.
            if(!visited[checkRow - makeRow0][checkCol]){
                visited[checkRow - makeRow0][checkCol] = 1;
                number++;

                for(let n = 0; n<moveRow.length; n++){
                    if(
                        isInMap(checkRow - makeRow0 + moveRow[n], checkCol + moveCol[n])
                        && cases[checkRow + moveRow[n]][checkCol+ moveCol[n]]
                    ){
                        queue.push([checkRow + moveRow[n],checkCol+ moveCol[n]]);
                    }
                }
            }
        }
    }

    for (let row = i + 1; row <= i + h; row++) {
        for (let col = 0; col < w; col++) {
            if (!visited[row - makeRow0][col] && cases[row][col]) {
                DFS(row, col);
                // BFS(row, col);
                island.push(number);
                number = 0;
            }
        }
    }

    answer.push(island.length);
    island = [];
}

console.log(answer.join('\n'));

