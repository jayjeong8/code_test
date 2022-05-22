const input = require("fs").readFileSync("/dev/stdin").toString()
    .trim().split("\n");

//입력을 한줄씩 나눈다. 0은 테스트케이스의 수를 알려준다.
const testLength = +input[0];
//각 줄을 각기 배열로 나눈다.
let result = 0;

//O가 연속되면 추가 점수를 얻고, X를 만나면 초기화된다.
for(let i=1; i<=testLength; i++){
    let addNum = 1;
    input[i].split('').reduce((pre,cur)=>{
        if(cur == 'O'){
            pre == 'O' ? addNum +=1 : addNum = 1;
            result += addNum;
        }
        return cur;
    },'X');
    console.log(result);
}