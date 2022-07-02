function solution(brown, yellow) {

    let answer = [];


    for(let row = 3; row < 5000; row++){
        for(let col = 3; col < 5000; col++){

            const brownTestNum = row*2 + (col*2-4);
            const yellowTestNum = row*col - brown;

            if(brownTestNum === brown && yellowTestNum === yellow){
                answer = [row, col];
                break;
            }
        }
    }

    return answer;
}

//가로길이*세로길이는 brown, yellow의 합과 동일하다. (=== 이 수 보다 클 수 없다.)
//갈색 격자는 8 이상이다. (테두리를 두르는 색상이므로.)