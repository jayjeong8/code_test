//테트로미노 - 폴리오미노란 크기가 1*1인 정사각형을 여러개 이어서 붙인 도형이며 서로 겹치지는 않고 변이 맞닿은 채 연결되어있어야 한다.
//정사각형 4개를 이어붙인 폴리오미노는 테트로미노라고 하며 5종류가 있다. (테트리스 도형 모양과 동일)
//아름이는 크기가 N*M인 종이 위에 테트로미노 하나를 놓으려고 한다. 각 칸에는 정수가 쓰여있다.
//테트로미노 "하나"를 놓아서 칸에 놓여진 칸에 쓰여있는 수들의 합을 최대로 하는 프로그램을 작성하기.
//테트로미노는 반드시 한 정사각형이 하나의 칸을 포함하도록 놓아야하며, 회전이나 대칭을 시켜도 된다.

//각 모양마다 기능을 따로 만들어서 돌리고 대칭하고를 전부 해보고 최대 값을 반환하게 한다?
//시작 위치를 정해주고 진행하게?

const [size, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = size.split(' ').map(Number);
const numbers = nums.map(i => i.split(' ').map(Number));

console.log(solution());

function solution() {
    let max = 0;

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            const square = TetSquare(y, x);
            const linear = TetLinear(y, x);
            const L = TetL(y, x);
            const thunder = TetThunder(y, x);
            const T = TetT(y, x);

            max = Math.max(max, square ? square : 0, linear ? linear : 0, L ? L : 0, thunder ? thunder : 0, T ? T:0);
        }
    }

    return max;
}


function TetSquare(y, x) {
    if(y < N - 1 && x < M - 1) {
        return numbers[y][x] + numbers[y][x + 1] + numbers[y + 1][x] + numbers[y + 1][x + 1];
    }
}

function TetLinear(y, x) {
    let ySum = 0; //numbers는 자연수로 구성되어 있다. (양수)
    let xSum = 0;

    if (y <= N - 4) { //세로 일자 테트로미노
        ySum = numbers[y][x] + numbers[y + 1][x] + numbers[y + 2][x] + numbers[y + 3][x];
    }
    if (x <= M - 4) { //가로 일자 테트로미노
        xSum = numbers[y][x] + numbers[y][x + 1] + numbers[y][x + 2] + numbers[y][x + 3];
    }

    return Math.max(ySum, xSum);
}

function TetL(y, x) {
    let ySum = 0;
    let xSum = 0;

    if (y <= N - 3 && x < M - 1) {
        //L형태가 디폴트이므로 0도 회전한 case0, 나머지는 각도에 따라 숫자가 붙고, 대칭은 R이 붙는다.
        const case0 = numbers[y][x] + numbers[y + 1][x] + numbers[y + 2][x] + numbers[y + 2][x + 1];
        const case180 = numbers[y][x] + numbers[y][x + 1] + numbers[y + 1][x + 1] + numbers[y + 2][x + 1];
        const case0R = numbers[y + 2][x] + numbers[y][x + 1] + numbers[y + 1][x + 1] + numbers[y + 2][x + 1];
        const case180R = numbers[y][x] + numbers[y + 1][x] + numbers[y + 2][x] + numbers[y][x + 1];
        ySum = Math.max(case0, case180, case0R, case180R);
    }

    if (x <= M - 3 && y < N - 1) {
        const case90 = numbers[y][x] + numbers[y][x + 1] + numbers[y][x + 2] + numbers[y + 1][x];
        const case270 = numbers[y][x + 2] + numbers[y + 1][x] + numbers[y + 1][x + 1] + numbers[y + 1][x + 2];
        const case90R = numbers[y][x] + numbers[y][x + 1] + numbers[y][x + 2] + numbers[y + 1][x + 2];
        const case270R = numbers[y][x] + numbers[y + 1][x] + numbers[y + 1][x + 1] + numbers[y + 1][x + 2];
        xSum = Math.max(case90, case270, case90R, case270R);
    }

    return Math.max(ySum, xSum);
}

function TetThunder(y, x) {
    let ySum = 0;
    let xSum = 0;

    if (y <= N - 3 && x < M - 1) {
        const case0 = numbers[y][x] + numbers[y + 1][x] + numbers[y + 1][x + 1] + numbers[y + 2][x + 1];
        const case0R = numbers[y][x + 1] + numbers[y + 1][x + 1] + numbers[y + 1][x] + numbers[y + 2][x];
        ySum = Math.max(case0, case0R);
    }

    if (x <= M - 3 && y < N - 1) {
        const case90 = numbers[y + 1][x] + numbers[y + 1][x + 1] + numbers[y][x + 1] + numbers[y][x + 2];
        const case90R = numbers[y][x] + numbers[y][x + 1] + numbers[y + 1][x + 1] + numbers[y + 1][x + 2];
        xSum = Math.max(case90, case90R);
    }

    return Math.max(ySum, xSum);
}

function TetT(y, x) {
    let ySum = 0;
    let xSum = 0;

    if (y <= N - 3 && x < M - 1) {
        const case90 = numbers[y + 1][x] + numbers[y][x + 1] + numbers[y + 1][x + 1] + numbers[y + 2][x + 1];
        const case90R = numbers[y + 1][x + 1] + numbers[y][x] + numbers[y + 1][x] + numbers[y + 2][x];
        ySum = Math.max(case90, case90R);
    }

    if (x <= M - 3 && y < N - 1) {
        const case0 = numbers[y][x] + numbers[y][x + 1] + numbers[y][x + 2] + numbers[y + 1][x + 1];
        const case0R = numbers[y][x + 1] + numbers[y + 1][x] + numbers[y + 1][x + 1] + numbers[y + 1][x + 2];
        xSum = Math.max(case0, case0R);
    }

    return Math.max(ySum, xSum);
}