function solution(s) {
    const sLength = s.length; //반복해서 사용되어서 변수로 만들어주었다.
    let answer = sLength; //답은 sLength와 같거나 작다. 최솟값 비교를 위해 입력 스트링의 길이를 초기값으로 설정해주었다.

    //i는 몇글자 단위로 압축할 것인지 나타낸다.
    //스트링 길이의 절반보다 큰 숫자로 압축할 수 없으므로 최대는 sLength / 2;
    for(let i=1; i<=(sLength/2); i++) {
        let str = "";
        let count = 1; //i길이로 몇번 압축했는지 나타낼 숫자.
        let tempStr = s.substr(0,i); //0부터 i까지를 압축 범위로 삼는다.

        //idx는 i부터 시작한다. (tempStr에 이미 0~i까지 담겼으므로.)
        for(let idx = i; idx <= sLength; idx += i) {
            let nextStr = s.substr(idx, i);

            if(tempStr === nextStr) { //'0,i만큼 자른 값'과 'i,i에서 정한 수'만큼 자른 값을 비교한다. 같으면 압축 가능.
                count += 1;

            } else {
                //tempStr과 nextStr이 같지 않은 경우 쌓인 카운트가 없으면 str에 바로 tempStr을 더해주고 있으면 카운트를 함께 더해준다.
                if (count === 1) str = str + tempStr;
                else str = str + count + tempStr;

                //카운트를 1로 다시 초기화해주고 tempStr자리에 새로 자른 범위인 nextStr이 들어간다.
                count = 1;
                tempStr = nextStr;
            }
        }

        //반복이 끝나고 남아있는게 있다면 그대로 넣어준다.
        if (count === 1) str = str + tempStr; //반복 없이 끝에 남을 경우
        else str = str + count + tempStr; //count가 올라가다가 끝나서 반복 있이 끝에 남을 경우

        answer = Math.min(answer, str.length); //압축하여 표현한 문자열 중 가장 짧은 것의 길이 찾기
    }

    return answer;
}