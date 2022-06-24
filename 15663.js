//N과 M 9
//입력으로 들어오는 수 중에는 중복이 있을 수 있다. 그러나 중복되는 수열을 여러번 출력하면 안된다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a, b) => a - b);

let result = [];
const array = [];
const visited = new Array(N).fill(false);

dfs(0);
const resultSet = [...new Set(result)];
console.log(resultSet.join('\n'));

function dfs(count) {
    if (count === M) {
        //이전과 달리 result를 배열로 만들고 여기에 답들을 모아둔 뒤에 resultSet(new Set)으로 중복을 제거하고 출력해준다.
        result.push(array.join(' '));
        return;
    }

    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            array.push(nums[i]);
            dfs(count + 1);
            array.pop();
            visited[i] = false;
        }
    }
}