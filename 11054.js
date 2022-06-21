//가장 긴 바이토닉 부분 수열....
//수열 S가 어떤 수 Sk을 기준으로 S1 < S2 < ... Sk-1 < Sk > Sk+1 > ... SN-1 > SN을 만족한다면, 그 수열을 바이토닉 수열이라고 한다.
// = 점차 커졌다가 Sk를 기준으로 점차 작아지는 수열 (커지기만 하거나 작아지기만 해도 해당한다.)
//{10, 20, 30, 25, 20}, {10, 20, 30, 40}, {50, 40, 25, 10} 은 바이토닉 수열이다.
//{1, 2, 3, 2, 1, 2, 3, 2, 1}과 {10, 20, 30, 40, 20, 30} 은 바이토닉 수열이 아니다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, ...nums] = input.map(n => n.split(' ').map(Number))
const cases = nums[0];
const reverseCases = [...cases].reverse();

//두개의 배열로 증가하는 부분 수열과 감소하는 부분 수열 개수를 각각 넣고 감소증가 개수를 더한 값이 max인 값을 반환한다.
const upMemo = [1,];
const downMemo = [1,];

for (let i = 1; i < N; i++) {
    let upTemp = 0; //수가 1이 아닌 0이어야 1과 같이 비교할 것이 없는 최저값일 때 결과가 2로 잘못들어가지 않고 1로 들어간다.
    let downTemp = 0;

    for (let j = i - 1; j >= 0; j--) {
        if (cases[i] > cases[j]) { //현재 숫자 이전의 증가배열
            if (upTemp < upMemo[j]) upTemp = upMemo[j];
        }
        if (reverseCases[i] > reverseCases[j]) { //현재 숫자 이후의 감소배열(뒤집어서 증가배열로 만들었다.)
            if (downTemp < downMemo[j]) downTemp = downMemo[j];
        }
    }
    upMemo[i] = upTemp + 1;
    downMemo[i] = downTemp + 1;
}

downMemo.reverse(); //reverse로 뒤집어서 구해줬기 때문에 다시 뒤집는다.
let result = 0;
for (let i = 0; i < N; i++) {
    const temp = upMemo[i] + downMemo[i];
    result = Math.max(temp, result);
}
//결과는 겹치는 부분 합계의 최댓값이므로 중복되는 1개를 빼준다.
console.log(result - 1);

// console.log(upMemo);
// console.log(downMemo);


/*
5
4 2 5 3 1

 */