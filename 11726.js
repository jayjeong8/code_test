//2*n 타일링
//2*n 크기의 직사각형을 1*2, 2*1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하기
//이 프로그램으로 구한 방법의 수를 10,007로 나눈 나머지를 출력한다.
//dp로 한 네모칸이 들어가면 그 다음 나올 수 있는 경우의 수, 두개가 차면 그 다음 나올 수 있는 경우의 수를 쭉 구한다.

const input = require('fs').readFileSync('/dev/stdin')
const N = Number(input);

const nHistory = {
    1: 1, //n이 1일 때 경우의 수는 1이다.
    2: 2, //n이 2일 때 경우의 수는 2이다.
}

//세로 2가 고정이기 때문에 N이 "3" 이상일 때 부터 우측에 2*1을 놓는지, 1*2를 놓는지에 따라 남은 공간의 경우의 수는 n-1, n-2가 된다.
//N의 수가 작아도 결과의 크기는 기하급수적으로 늘어나기 때문에 미리 %10007 나머지를 적용한다. (결과는 같다)
for (let i = 3; i <= N; i++) {
    nHistory[i] = (nHistory[i - 1] + nHistory[i - 2]) % 10007;
}

console.log(nHistory[N]);