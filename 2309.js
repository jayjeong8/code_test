//일곱 난쟁이
//난쟁이들이 나갔다가 집에 돌아오니 난쟁이가 2명 늘어 9명이 되어있었다.
//백설공주는 진짜 일곱 난쟁이의 키를 더하면 합이 100이 된다는 사실을 기억해냈다.

//9명 중 7명 키의 조합으로 100이 되면 출력하는 문제이다. (답이 여러개면 아무거나 출력해도 된다.)
//전체 난쟁이 키의 합 - 100, 9-7 = 2명 // 2명 키의 합이 전체키-100과 동일한 값을 찾고 나머지 배열을 반환한다. 
//답은 오름차순으로 출력한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const heightSum = input.reduce((acc, cur) => acc + cur, 0);
const twoOthers = heightSum - 100;

let check = false;

for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (input[i] + input[j] === twoOthers) {
            input.splice(i, 1);
            input.splice(j - 1, 1);
            check = true;
            break;
        }
    }
    if(check) break; //하나 찾았을 때 break를 안해주면 일치하는 값을 하나 더 찾았을 때 배열이 또 잘려나가 7난쟁이보다 적은 수가 된다.
}
const ans = input.sort((a, b) => a - b);
console.log(ans.join('\n'));
