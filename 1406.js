//영어 소문자만을 기록할 수 있는 에디터를 구현하려고 한다.
//이 에디터에는 '커서'가 있는데 문장 맨 앞, 맨 뒤, 중간 임의에 위치할 수 있고,
//길이가 L인 문자열이 현재 편집기에 입력되어 있으면 커서가 위치할 수 있는 곳은 L+1가지 경우가 있다.(각사이+끝과끝)

//편집기에 입력되어있는 문자열이 주어지고, 명령어가 차례로 주어졌을 때, 모든 명령 후에 입력되어있는 문자열 구하기!
//커서는 문장의 맨 뒤에서 시작한다.
//첫째줄 수정전문자열, 둘째줄 명령어 개수, 그 이후는 명령어들
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [string, num, ...command] = input;

const lStack = string.split('');
const rStack = [];

for(let i=0; i < +num; i++){
    const cmd = command[i].split(' ');

    if (cmd[0] === 'L' && lStack.length){
        rStack.push(lStack.pop());
    } 
    else if (cmd[0] === 'D' && rStack.length){
        lStack.push(rStack.pop());
    }
    else if (cmd[0] === 'B' && lStack.length){
       lStack.pop();
    }
    else if (cmd[0] === 'P'){
        lStack.push(cmd[1]);

    }
}
console.log(lStack.concat(rStack.reverse()).join(''));