function solution(clothes) {
    var answer = 1;
    const obj = {};

    for(let i=0; i<clothes.length; i++){
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }

    for(let key in obj){
        answer *= obj[key];
    }

    return answer -1;
}

//빈 객체 생성 (obj)
//obj에 해당 키가 없으면 값을 1(옷을 입지 않은 경우)로 지정하고 1(각 키별 옷의 개수)을 더해줌
//for in 구문으로 obj의 키를 반복하여 불러오고 해당 값을 answer에 곱해줌
//모든 항목은 안입음 1번항목입음 2번항목입음 등 "안입음" 항목이 있다.
//그러므로 항목의 기본값을 1로 두고 항목마다 1씩 더해준다.
//마지막에 모두 입지않은 경우를 제외하기 위해 -1을 해준다.