const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);


/*//버블정렬 (이유는 모르겠는데 실패 뜸)
function bubbleSort (array) {
    for(let i=0; i<array.length; i++){
        let swap;
        //j와 j+1을 비교하고, 한번 턴을 돌때마다 가장 큰 수가 가장 마지막에 가있기 때문에 array.length-1-i 만큼 빼준다.
        for(let j=0; j<array.length-1-i; j++) {
            if (array[j] > array[j+1]){
                swap = array[j];
                array[j] = array[j+1];
                array[j+1] = swap;
            }
        }
        if (!swap) {
            break;
        }
    }
    return array;
}
// console.log(bubbleSort(input).join('\n'));*/

function insertionSort (array){
    for(let i=1; i<array.length; i++){ // 왼쪽 값과 비교해야해서 1부터 시작
        let cur = array[i];
        let left = i - 1;

        //왼쪽 값이 현재 값보다 크면 작은 값을 왼쪽으로.(큰 값을 오른쪽으로) 맨 앞까지 비교한다.
        while (left >=0 && array[left] > cur) { //배열 첫번째 요소는 0이기 때문에 left는 0보다 같거나 커야한다.
            array[left+1] = array[left];
            left--;
        }
        array[left+1] = cur; //cur에 담아놨던 값을 넣는데, while문 동작을 안했으면 cur=cur이고, 아니라면 이전 숫자로 옮긴 것.

    }
    return array;
}
console.log(insertionSort(input).join('\n'));
