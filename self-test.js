// 자연수가 들어있는 배열 arr가 매개변수로 주어집니다.
// 배열 arr안의 숫자들 중에서 앞에 있는 숫자들부터 뒤에 중복되어 나타나는 숫자들의
// 중복 횟수를 계산해서 배열로 return 하도록 solution 함수를 완성해주세요.
// 만약 중복되는 숫자가 없다면 배열에 -1을 채워서 return 하세요.
//제한사항
//- 배열 arr의 길이는 1 이상 "100 이하"의 자연수입니다.
//- 배열 arr의 원소는 "1 이상" 100 이하의 자연수입니다.

// const input = require('fs').readFileSync('/dev/stdin')
const testValue1 = [1, 2, 3, 3, 3, 3, 4, 4];
const testValue2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
const testValue3 = [3, 5, 7, 9, 1];

// 최고 숫자만큼의(100+1) 0으로 채워진 어레이를 만든다
const arr = new Array(101).fill(0);
// 각 숫자를 리니어서치 하면서 해당값의 인덱스를 가진 어레이에 넣어서 수를 올린다.
const n=testValue3 //테스트용 값
for(let i=0; i<n.length; i++){
    arr[n[i]]++;
}
// 결과를 필터링해서 0과 1이 아닌것만 남겨서 출력한다.
const result = arr.filter(i => i > 1);
console.log(result.length ? result : [-1]);
// 만약 필터링 결과가 없다면 [-1]을 출력한다.
