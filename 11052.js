//카드 구매하기
//카드는 8가지 등급이 있고 각 카드에는 등급을 나타내는 색이 칠해져있다.
//카드는 카드팩 형태로만 구매할 수 있는데, 카드1개가 포함된 카드팩부터 N개가 포함된 카드팩같이 총 N가지가 존재한다.
//민규는 팩이 비싸면 높은 등급의 카드가 더 잘 나올 거라고 믿고 최대한 돈을 많이 써서라도 카드 N개를 구매하려고 한다.
//카드가 i개 포함된 카드팩의 가격은 Pi(변수)원이다.
//첫째 줄에 민규가 구매하려는 카드의 개수 N이 주어진다. 둘째줄에는 Pi가 P1부터 PN까지 차례대로 주어진다.

//Q. 민규가 카드 N개를 갖기 위해 지불해야 하는 금액의 최댓값을 출력하기

const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');
const N = + input[0];
const Pi = input[1].split(' ').map(Number);

const memo = {
    1: Pi[0],
}

for (let i=2; i<=N; i++){
    //Pi의 i번째 금액을 우선 넣는다.
    let iOrder = i-1;
    memo[i] = Pi[iOrder];

    //이미 쌓여진 memo를 조합해서 만들 수 있는 최대 값을 찾는다.
    for(let j=iOrder; j>=i/2; j--){
        //ex) 2, 1
        memo[i] = Math.max(memo[i],memo[i-j] + memo[j]);
    }
}
console.log(memo[N]);