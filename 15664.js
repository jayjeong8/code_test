//N과 M 10
//중복되는 수열을 출력하면 안되고 입력 값에는 중복 값이 있다.
//비내림차순(같거나 커지게)으로 수열을 구성하기

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = [];
const array = [];
const visited = new Array(N).fill(false);

dfs(0, 0);

//Set으로 바꿔서 중복을 제거한다. 위 dfs 함수 실행보다 아래에 있어야 result에 값이 들어간 후 작동해서 중복을 제거할 수 있다.
const resultSet = [...new Set(result)];
console.log(resultSet.join('\n'));

function dfs(count, idx) {
    if (count === M) {
        result.push(array.join(' '));
        return;
    }

    for (let i = idx; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            array.push(nums[i]);
            dfs(count + 1, i); //같거나 커지게 수열을 구성
            array.pop();
            visited[i] = false;
        }
    }
}