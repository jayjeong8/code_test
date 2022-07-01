//나이트의 이동 - 체스판 위에 나이트가 놓여져 있다. (나이트가 움직일 수 있는 범위는 문제 그림에 나와있다.)
//나이트는 몇번 움직이면 입력으로 주어진 칸으로 이동할 수 있을까?
//여러 테스트케이스가 한번에 들어온다. 각 테스트케이스틑 세줄로 이루어져 있다.

//토마토 문제와 유사 - 7576

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const caseN = Number(input[0]);

const moveRow = [-2, -1, 1, 2, 2, 1, -1, -2];
const moveCol = [1, 2, 2, 1, -1, -2, -2, -1];

const ans = [];

for (let i = 1; i <= caseN * 3; i += 3) {
    const size = Number(input[i]);
    const [knightR, knightC] = input[i + 1].split(' ').map(Number);
    const [goalR, goalC] = input[i + 2].split(' ').map(Number);

    let result = 0;
    const path = [];
    for (let j = 0; j < size; j++) {
        path.push(new Array(size).fill(0));
    }

    const isInChess = (row, col) => {
        return row >= 0 && row < size && col >= 0 && col < size;
    }

    const BFS = (row, col) => {
        const queue = [[row, col]];

        let number = 0;
        while (number !== queue.length) {
            const [curRow, curCol] = queue[number];

            if (curRow === goalR && curCol === goalC) {
                result = path[curRow][curCol] - 1;
                ans.push(result);
                break;
            }
            for (let n = 0, length = moveRow.length; n < length; n++) {
                const nextRow = curRow + moveRow[n];
                const nextCol = curCol + moveCol[n];

                if (isInChess(nextRow, nextCol) && !path[nextRow][nextCol]) {
                    queue.push([nextRow,nextCol]);
                    path[nextRow][nextCol] = path[curRow][curCol] + 1;
                }
            }
            number++;
        }
    }
    //path[knightR][knightR]로 되어있어서 오답이었다.. 오타 제발.. 예제케이스는 R과 C가 같은 곳에서 시작해서 한참 뒤에 찾았다.
    path[knightR][knightC] = 1;
    BFS(knightR, knightC);
}

console.log(ans.join('\n'));
