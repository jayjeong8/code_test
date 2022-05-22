const input = require('fs').readFileSync('/dev/stdin');
//N은 3의 거듭제곱(3,9,27...), N의 패턴은 N*N인 정사각형 모양 (줄간격때문에 직사각으로 보임)
let N = Number(input);

//N/3 정사각형을 N/3 패턴으로 둘러싼다. (3/3은 1이라서 3*3 정사각형)
//9는 3의 리턴 값으로 3*3 공백을 두른다.

let result = '';

//for문으로 N의 길이 만큼 가로세로(x,y) 좌표 값과 인풋으로 들어온 숫자를 받아서 별을 찍는다.
const star = (x, y, num) => {
    if (x%3===1 && y%3 ===1){ //1,4,7 등 3배수 바로 다음 칸이 해당된다.
        result += ' ';
    } else {
        if(num === 1) {
            result += '*';
        }else{ //x,y가 3~5(9~15등 계속 나눠짐)이면 Math.floor로 x가 1이 되고 result += ' ';이 실행된다. (중심 빈칸 만들기)
            star(Math.floor(x/3), Math.floor(y/3),Math.floor(num/3));
        }
    }
};

const starPosition = () => {
    for (let x = 0; x< N; x++){
        for (let y = 0; y < N; y++) {
            star(x, y, N);
        }
        result += "\n"; //한줄 끝나면 다음줄.
    }
    console.log(result);
}

starPosition();