//날짜 계산
//준규가 사는 나라는 우리가 사용하는 연도와 다르게 수 3개를 이용해서 연도를 나타낸다.
//각각의 수는 지구 E, 태양 S, 달 M 을 나타낸다.
//1년은 1 1 1, 1년이 지날 때 마다 세 수는 모두 1씩 증가하는데 어떤 수가 범위를 넘어가면 1이 된다.
//ex) 15년 15 15 15 / 16년 1 16 16
//범위 (1 ≤ E ≤ 15, 1 ≤ S ≤ 28, 1 ≤ M ≤ 19)
//E S M을 입력으로 받고 ESM으로 표시할 수 있는 가장 빠른 연도를 출력한다.

//입력받은 ESM이 같은 숫자라면 그 숫자가 우리가 사용하는 연도가 된다.
//1씩 올라갈때마다 각 수의 범위에 따라 나머지를 구해주고 그 수가 입력과 동일해질 때 까지 카운트를 더해준다.
//입력과 동일해지면 카운트를 반환한다.

/*const [E, S, M] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let count = 1;
while (true) { //메모리가 4mb라서 최대한 메모리 사용을 줄여야한다.
    if (!((count-E) % 15) &&
        !((count-S) % 28) &&
        !((count-M) % 19)) {
        console.log(count);
        break;
    }
    count++;
}*/

//메모리초과가 계속 뜨길래 아래 블로그에서 카피해서 그대로 제출해봐도 메모리 초과였다..

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [E, S, M] = line.split(" ").map(Number);

    let count = 1;
    while (true) {
        if (!((count - E) % 15) &&
            !((count - S) % 28) &&
            !((count - M) % 19)) {
            console.log(count);
            break;
        }
        count++;
    }
});