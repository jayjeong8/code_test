const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [info, cardPack] = input;
const [N, M] = info.split(' ').map(Number);
const cards = cardPack.split(' ').map(Number);

//N장의 각 숫자를 가진 카드가 주어졌을 때, M>='카드세장"합"' 출력하기
//카드3장을 모두 구하고 합한 값을 배열에 넣기, 배열을 정렬한 후 M보다 작은 값으로 필터링하고 가장 뒤에 있는 값 출력하기
//or M>=일때 매 result를 max값과 현재 나온 값을 비교해서 바꾸기

let result = 0;
let cardSum = 0;
let picked = new Array(N).fill(false, 0, N);

function cardsPick(toPick, start){ //toPick = 앞으로 더 고를 카드의 수
    //기저 사례: 더 고를 카드가 없을 때 result를 출력.
    if(toPick === 0) {
        if(cardSum <= M){
            result = Math.max(result, cardSum);
        }
        return;
    }

    for(let i = start; i < N; i++){
        if (!picked[i]){ //대상이 선택된 적이 없다면
            picked[i] = true; //대상을 선택한다.
            cardSum+= cards[i]; //선택한 카드의 값을 cardSum에 더한다.
            cardsPick(toPick-1,i); //다음 각각의 카드로 넘어가서 선택된 적 없는 값을 더한다.
            picked[i] = false; //i번 카드를 선택한 적 없는 것으로 되돌린다.
            cardSum-= cards[i]; //바꾸었던 변수의 값을 되돌린다.
        }
    }
}

cardsPick(3, 0);
console.log(result);

/*
//for문으로 풀 경우
for (let i = 0; i<N-2; i++){
    for(let j = i+1; j<N-1; j++){
        for (let k = j+1; k<N; k++){
            let cardSum = cards[i]+cards[j]+cards[k];
            if(cardSum <= M){
                result = Math.max(result, cardSum);
            }
        }
    }
}
console.log(result);
*/
