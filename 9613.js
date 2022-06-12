//GCD=greatest common divisor, 최대공약수
//첫번째 줄에 테스트케이스의 총 개수가 주어진다. 각 테스트케이스 맨 앞에는 테스트케이스 내의 숫자 개수가 주어진다.
//각 테스트케이스 내의 숫자들을 '조합'해서 각각 최대공약수를 구한 뒤 전부 더한다.
//브루트포스

//1.각 케이스의 모든 조합을 만든다.
//2.유클리드호제법을 이용하여 최대공약수를 구한다.
//3.각각의 최대공약수를 더한다.

//총 케이스 개수를 제외하고 테스트케이스만 남김
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').slice(1);
//각 테스트케이스의 숫자 개수를 제외하고 숫자만 split해서 남김
const cases = input.map(n => n.split(' ').slice(1).map(Number));
const ans = [];

//각 케이스의 조합을 최대공약수fn에 넣어서 합계를 구함
cases.forEach(n => {
    let sum = 0;

    const leng = n.length;
    for (let i = 0; i < leng; i++) {
        for (let j = i+1; j < leng; j++) {
            sum += gcdFn(n[i], n[j]);
        }
    }
    ans.push(sum);
})

console.log(ans.join('\n'));

function gcdFn(i, j) {
    if(i<j){
        let tmp = i;
        i = j;
        j = tmp;
    }
    while(j !== 0){
        let n = i % j;
        i = j;
        j = n;
    }
    return i;
}

