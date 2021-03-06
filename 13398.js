//연속합 2
//n개의 정수로 이루어진 임의의 수열이 주어지는데, 이 중 "연속된" 몇개의 수를 선택해서 가장 큰 합을 만드려고 한다.
//원한다면 수열에서 수를 하나 제거할 수 있다. (10 -4 3 1 5 6 -35 12 21 -1 에서 -35를 제거하는 등)


const [N, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const cases = nums[0].split(' ').map(Number);

//풀이 2, 2가지 memo
//memo1 - 현재 값 + 이전 누적 최대값 (이전 누적값 + 현재값이 현재값보다 크면 합한 값, 아니면 현재값);
//memo2 - 이전 memo1 값(현재 값을 뺀 값이라고 가정)과 이전 memo1, memo2 중 최대값 + 현재값
const memo1 = [cases[0],];
const memo2 = [cases[0],];

for (let i = 1; i < N; i++) {
    const pre = i - 1;
    if (cases[i] >= cases[i] + memo1[pre]) memo1.push(cases[i]); //삭제 없이 누적
    else memo1.push(cases[i] + memo1[pre]);

    if (memo1[pre] > memo2[pre] + cases[i]) memo2.push(memo1[pre]); //현재 값 삭제 경우
    else memo2.push(memo2[pre] + cases[i]); //현재 값 삭제 안하는 경우
}
console.log(Math.max(...memo1, ...memo2));

/* 풀이 1, 3가지 memo
//memo1 - 현재 값 + 이전 누적 최대값 (이전 누적값 + 현재값이 현재값보다 크면 합한 값, 아니면 현재값)
//memo2 - 현재 값 + 이전 값이 빠진 수라는 가정하에 2개 전 누적값 가져오기
//memo3 - 현재 값 + 이전 값의 최고값(memo 1, 2 중)

const memo1 = [cases[0],];
const memo2 = [cases[0],];
const memo3 = [cases[0],];

for (let i = 1; i < N; i++) {
    const pre = i - 1;
    if (cases[i] >= cases[i] + memo1[pre]) memo1.push(cases[i]);
    else memo1.push(cases[i] + memo1[pre]);

    if (i !== 1) memo2.push(cases[i] + memo1[pre - 1]);
    else memo2.push(cases[i]);

    memo3.push(Math.max(memo1[pre], memo2[pre], memo3[pre]) + cases[i]);
}

console.log(Math.max(...memo1, ...memo2, ...memo3));
*/
