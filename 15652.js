//N과 M 4
//같은 수를 여러번 골라도 된다. 고른 수열은 비내림차순이어야 한다. (뒤에 나오는 수가 앞의 수보다 커져야한다.)


const [N, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let result = '';
let arr = [];

dfs(0, 1);
console.log(result);

function dfs(count, idx) {
    if (count === M) {
        result += `${arr.join(' ')}\n`;
        return;
    }

    for (let i = idx; i <= N; i++) {
        arr.push(i);
        dfs(count + 1, i); //같은 수를 사용할 수 있음 + 비내림차순(뒤로 갈수록 같거나 커져야함) 이라서 동일한 인덱스를 넣는다.
        arr.pop();
    }
}