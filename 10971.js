//외판원 순회 2
//1번부터 N번까지 번호가 매겨져 있는 도시들이 있고 도시들 사이에는 길이 있거나 없다.
//한 외판원이 어느 한 도시에서 출발해 N개의 도시를 모두 거쳐 다시 원래의 도시로 돌아오는 순회 여행 경로를 계획하려고 한다.
//맨 마지막에 다시 출발했던 도시로 돌아오는 것을 제외하고 한번 갔던 도시로는 다시 갈 수 없다. 
//가장 적은 비용을 들이는 여행 계획 세우기
//i도시에서 j도시로 가기위한 비용은 W[i][j]이다. 그러므로 W[i][i] = 0이다. (같은 도시에서 같은 도시로 가는 것이라서 제외)
//**모든 비용은 양의 정수이다. W[i][i]가 아닌 W[i][j]인데 비용이 0이라면 갈 수 없는 경우이다.**

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, ...cases] = input;
const W = cases.map(e => e.split(' ').map(Number));

//N과M 구하기 방식, 0을 포함하지 않는 조합만 만들기
const visited = new Array(+N).fill(false);
let min = 987654321;

startCity(+N);
console.log(min);

//시작 루트용 반복문 - 모든 도시에서 출발할 수 있고 어떤 비용이 낮을지는 알 수 없으니 모든 도시에서 출발하는 함수를 따로 만든다.
//처음 시도할때는 for문을 이중으로 만들어봤는데 불필요한 실행과 오작동이 있었다.
function startCity(n) {
    for (let i = 0; i < n; i++) { //각 도시에서 시작. start와 next값으로 i를 넣어준다.
        dfs(0, n, i, i, 0);
    }
}

//경로 값을 합하는 재귀
function dfs(count, n, start, next, sum) {

    if (count === n && start === next) {
        min = Math.min(min, sum);
        return;
    }

    for (let i = 0; i < n; i++) {
        //처음 실행될때 현재 도시(이전 도시에서 next로 넘겨받은 현재 도시)에서 각 도시로 가는 값(i)을 체크한다.
        //이미 방문했었거나 0이 값인 도시(현재 도시거나 가는 길이 없는 도시)라면 건너뛴다.
        if (!visited[i] && W[next][i] !== 0) {
            visited[i] = true;

            if ((sum + W[next][i]) < min) { //min값보다 커지면 다음 재귀 실행을 하지않고 넘어간다.
                dfs(count + 1, n, start, i, sum + W[next][i]); //선택한 도시 i를 next로 넘긴긴다.
            }

            visited[i] = false;
        }
    }
}