//재귀 횟수만큼 챗봇이 재귀함수가 무엇인지 대답해주는 챗봇
//라고 답변하였지. 주의

const input = require('fs').readFileSync('/dev/stdin');

let N = Number(input);

function professor (n){
    if(n===0){
        console.log('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');
    }

    let line = '';
    for(let i=0; i<n*4; i++) line+='_';

    if(n===N){
        return `${line}"재귀함수가 뭔가요?"
${line}"재귀함수는 자기 자신을 호출하는 함수라네"
${line}라고 답변하였지.`;
    }

    if(n<N){
        console.log(`${line}"재귀함수가 뭔가요?"
${line}"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.
${line}마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.
${line}그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`);
    }

    return `${professor(n+1)}
${line}라고 답변하였지.`;
}

console.log(`${professor(0)}`);