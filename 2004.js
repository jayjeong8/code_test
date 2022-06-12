//조합(n개 중에서 m개를 뽑는 경우의 수) 숫자의 끝자리 <<0의 개수>>
//정수는 20억 이하의 숫자 중 m,n이 나오고, m은 0일 수도 있고 n은 0보다 크다.
//조합 공식은 n! / ((n-m)! * m!) 이다.
//팩토리얼 0의 개수 문제와는 다르게(1676) 2와 5의 개수(끝자리 0의 개수)를 다 구해야한다.
// '/'가 들어가서 그렇다고 하는데 이해를 못했다..


const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);
input.push(input[0] - input[1]);
const [N,M,C] = input;

//여기선 왜 -를 해서 값을 구하는 걸까?
//조합공식은 '/'를 기점으로 분자, 분모이다. 분수는 분자,분모를 소인수분해해서 겹치는 부분을 빼서 계산할 수 있다.
//0의 개수를 구하는 문제라서 2,5의 지수(제곱되는 숫자)만 파악한 뒤 아래와 같이 빼주는 것이다.
const result5 = getPowerN(N,5)-getPowerN(M,5)-getPowerN(C,5);
const result2 = getPowerN(N,2)-getPowerN(M,2)-getPowerN(C,2);

console.log(Math.min(result2,result5));


function getPowerN(num,power) {
    let count = 0;

    while(num >= power) {
        count += parseInt(num / power);
        num /= power; //1676번처럼 25, 125%5===0을 구하는 대신 이렇게 더 나오는 것을 추가할 수 있다.
    }

    return count;
}


