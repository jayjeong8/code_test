//로또 - 독일 로또는 1...49에서 6개를 고른다.
//로또 번호를 선택하는데 가장 유명한 전략은 49가지 수 중 k개의 수를 골라 집합 S를 만든 다음 그 수만 가지고 번호를 선택하는 것이다.
//예시 - k=8, S={1,2,3,4,8,13,21,34} 이 집합에서 6개 숫자를 고를 수 있는 경우의 수는 28가지 이다.
//k와 집합 S가 주어졌을 때 6개를 고르는 모든 경우의 수를 구하기.
//여러개의 테스트케이스가 주어지고, 각 테스트케이스의 첫번째 수는 k이고 나머지 수는 집합 S이다.
//각 테스트케이스의 출력 사이에는 빈줄을 하나 출력한다.


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const result = [];
const array = [];
const visited = new Array(13).fill(false); //k는 최대 13이다.

cases();
console.log(result.join('\n').trim());

function cases() {

    for (let i = 0; +input[i] !== 0; i++) {
        const [N, ...testCase] = input[i].split(' ').map(Number);
        lotto(0, N, testCase, 0);
        result.push(' '); //케이스 사이 한칸 비우기. 맨 뒤 케이스까지 포함되므로 출력 전에 자르기 
    }
}

function lotto(count, n, testArray, idx) { //중복되는 수가 있거나 이미 나온 값이 다시 나오면 안되므로 idx를 사용한다.
    if (count === 6) {
        result.push(array.join(' '));
        return;
    }

    for (let i = idx; i < n; i++) {
        if(!visited[i]){
            visited[i] = true;
            array.push(testArray[i]);
            lotto(count + 1, n, testArray, i + 1);
            array.pop();
            visited[i] = false;
        }
    }
}
