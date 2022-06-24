//N과 M (1)
//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
//한 줄에 하나씩 문제의 조건을 만족하는 수열을 출력한다. 중복되는 수열을 여러번 출력하면 안되고, 공백으로 수를 구분해서 출력한다.
//수열은 '사전순'으로 증가하는 순서로 출력한다. (1~8까지의 입력만 주어진다.)
//백트래킹 - 모든 경우의 수를 고려하지만 조건에 의해서 불가능한 경우의 수는 탐색하지 않고 back하여 다른 경로를 탐색하는 것

const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

//한번 돌때마다 방문했던 것을 확인하기 위해서 visited 배열을 만든다.
const visited = new Array(N + 1).fill(false);
const array = [];
let result = '';

//dfs 함수 실행
dfs(0);


function dfs(count) {
    if (count === M) {
        result += `${array.join(' ')}\n`;
        return;
    }

    //N은 4, M은 2로 예를 들면 count가 0일 때 i는 1~N(4)까지 돌면서 array 첫번째 칸(0)에 i를 넣는다.
    //그다음 다시 호출된 dfs 함수가 (재귀함수) 두번째 자리에 첫번째 숫자와 겹치지 않는 숫자를 순서대로(for문이 순서대로 작동하니까) 넣는다.
    //count가 0과 동일하게 되어 하나가 result에 추가되고 종료되어 마지막 한자리가 빠지면 그 다음순서 for문을 통해 다시 그자리에 다음 숫자가 들어간다.
    //count가 0인 i를 array에 넣고, visited 숫자를 건너뛰고 count가 1인 i를 넣고, count가 2가 되면 예시에서 M이 2이므로 result에 추가후 return.
    //그럼 뒤에 값이 pop하고 for문의 진행에 따라서 다음 i를 넣어서 동일하게 진행.
    //ex) array 참고 => [1](첫번째 i), [1,2], ->(result에 추가하고 pop) -> [1], [1,3], [1], [1,4], [1], [](첫번째 i=1 for문이 끝남, [2](첫번째 i=2 for문), [2,1], [2],,,
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            array.push(i);
            dfs(count + 1);
            array.pop();
            visited[i] = false;
        }
    }
}

console.log(result);