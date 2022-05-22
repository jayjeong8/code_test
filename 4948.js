const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

//베르트랑공준 : 자연수n에 대하여, n <= 2n 중 소수는 적어도 하나 존재한다.
//자연수 n이 주어졌을 때 n <= 2n인 소수 "개수"를 구하기

for(let n=0; n<input.length; n++){
    let result = 0;
    for(let i=input[n]+1; i<=input[n]*2; i++){
        if(i===2 || i===3){
            result++;
        }
        if(i%2===0){
            continue;
        }
        for(let j=3; j<=i; j+=2){
            if(i%j===0){
                break;
            }
            if(j*j > i){
                // console.log(i);
                result++;
                break;
            }
        }
    }
    if(input[n]){
        console.log(result);
    }
}