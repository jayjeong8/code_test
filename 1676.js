//팩토리얼을 구한 뒤에 뒤에서부터 0의 개수가 몇개인지 확인한다.
//최대 수가 500이기 때문에 5의 배수 단위로 0의 개수가 늘어난다는 점을 참고하자. 5의 제곱일 경우에는 제곱수-1만큼 더 늘어나는 듯 하다

const input = require('fs').readFileSync('/dev/stdin')
const N = Number(input);

let ans = 0;

//N보다 작거나 같은 5의 배수를 방문할 때 마다 ans++를 해준다.
for (let i = 5; i <= N; i += 5) {
    ans++;

    //N의 최대값이 500이기 때문에 500 내 5 제곱 중 가장 큰 수인 125까지만 비교한다.
    //50, 250 등 25(5*5)와 125(5*5*5)의 배수 안에도 5가 여러개 들어있기 때문에 나머지 값을 이용해서 ++해준다.
    if (i % 25 === 0) ans++;
    if (i % 125 === 0) ans++;
}
console.log(ans);

