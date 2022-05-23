//체스판처럼 정사각형 단위로 흰색이나 검은색이 칠해져있지만 꼭 번갈아서 칠해져있지는 않다.
//<8*8>로 자른 후 번갈아서 칠해진 체스판으로 직접 칠하려고 한다.
//칠해야하는 정사각형의 최소 개수를 구하라.
//0. 정답 보드의 사본을 만든다.
//1. 원본 보드의 맨 윗줄 부터 8*8씩 조사해서 맨 아랫줄까지 내려온다.
//2. 맨 아랫줄까지 사본과 비교했으면 맨 윗줄의 두번째칸부터 맨 아랫줄까지 내려온다.
//3. 가로길이-8만큼 한칸씩 옆으로 가면서 맨 아래까지 조사
//4. 이전과 다른 색상이 나오면 ++.

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [H, W] = input[0].split(' ').map(Number);
let result = 1250;

let whiteBoard = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
let blackBoard = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

let myBoard = input.slice(1);

const check = (x,y) => {
    let checkWhite = 0;
    let checkBlack = 0;

    for (let k = y; k < y + 8; k++) { //8*8 세로
        for (let l = x; l < x + 8; l++) { //8*8 가로
            if (myBoard[k][l] !== whiteBoard[k-y][l-x]) {
                checkWhite++;
            }
            if(myBoard[k][l] !== blackBoard[k-y][l-x]){
                checkBlack++
            }
        }
    }

    let min = checkBlack < checkWhite ? checkBlack : checkWhite;

    if(min < result) result = min;
}

for (let i = 0; i <= H - 8; i++) { //보드 세로 시작점
    for (let j = 0; j <= W - 8; j++) { //보드 가로 시작점
        check(j,i);
    }
}


console.log(result);