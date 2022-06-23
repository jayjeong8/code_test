//사탕 게임
//처음에 N*N 크기에 다양한 색의 사탕을 채워넣는다. 
//상근이는 사탕의 색이 다른 인접한 두칸을 고른다. 그 다음 고른 칸에 들어있는 사탕을 서로 교환한다. (애니팡 처럼)
//이제 모두 같은 색으로 이루어져 있는 가장 긴 부분을 고른 다음 그 사탕을 모두 먹는다. 
//상근이가 먹을 수 있는 사탕의 최대 개수 구하기!

const [N, ...candies] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const candyArr = candies.map(candy => candy.split(''));
let maxCount = 0;

console.log(solution());

function solution(){
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            if(j+1 < N) check(i, j, false); //오른쪽과 교환
            if(i+1 < N) check(i, j, true); //아래쪽과 교환
        }
    }
    return maxCount;
}

function check(i, j, below) {

    swap(i, j, below); //교환하기

    let count = 1;

    //모든 행의 가로 확인
    for(let x = 0; x < N; x++){
        count = 1;
        for(let y = 0; y < N-1; y++){
            if(candyArr[x][y] == candyArr[x][y+1]){
                count++;
                maxCount = Math.max(maxCount, count); //카운트가 갱신될 때 마다 max와 비교)
            }else{
                count = 1; //다르면 카운트 초기화
            }
        }
    }

    //모든 열의 세로 확인
    for(let x = 0; x < N; x++){
        count = 1;
        for(let y = 0; y < N-1; y++){
            if(candyArr[y][x] == candyArr[y+1][x]){
                count++;
                maxCount = Math.max(maxCount, count); //카운트가 갱신될 때 마다 max와 비교)
            }else{
                count = 1; //다르면 카운트 초기화
            }
        }
    }

    swap(i, j, below); //제자리로 돌려놓기
}


function swap(i, j, below) {

    const tmp = candyArr[i][j];

    if (below) { //아래쪽과 교환
        candyArr[i][j] = candyArr[i + 1][j];
        candyArr[i + 1][j] = tmp;
    } else { //오른쪽과 교환
        candyArr[i][j] = candyArr[i][j + 1];
        candyArr[i][j + 1] = tmp;
    }
}