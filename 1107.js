//리모컨
//수빈이가 채널을 돌리려다가 버튼을 너무 세게 누르는 바람에 일부 숫자 버튼이 고장났다.
//버튼은 0-9까지 숫자, +,-가 있다. 채널은 무한대만큼 있고, 채널 0에서 -를 누른 경우에는 채널이 변하지 않는다.
//수빈이가 이동하려는 N이라는 채널과 고장난 버튼이 무엇인지 주어진다.(고장난 버튼은 여러개일 수 있고 없을 수도 있다.)
//최소 몇번을 눌러서 N으로 이동할 수 있는지 구하라. 시작은 100번이다.

//채널이 100번이면 움직이지 않아도 되고, 백번과 가까우면 위아래 버튼으로 이동할 수도 있다.
//현재 채널이 N과 같지 않으면 쓸 수 있는 숫자키를 써서 움직인다.
//누를 수 있는 숫자키 중 N과 가장 가까운 숫자키를 누른다. 숫자키가 없으면 다음 자리수가 어디랑 가까운지에 따라 키를 누른다.
//수빈이가 이동하려고 하는 채널 N (0 ≤ N ≤ 500,000) // 한자리 수 위인 1,000,000까지 브루트포스를 시도. (9999를 가는 가장 빠른 방법은 10000)

const [inputN, caseN, ...BrokenBtn] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

console.log(solution()); //solution 실행하기


function solution() {
    const channelDefault = 100;
    let onlyUpDown = Math.abs(channelDefault - +inputN); //+,- 버튼으로만 움직였을 때
    if(onlyUpDown === 0) return 0; //input으로 100이 들어올 경우 바로 반환

    let min = 987654321; //count와 최솟값 비교를 하기 때문에 큰수에서 시작한다.
    let count = 0;

    const troubleBtn = +caseN ? BrokenBtn[0].split(' ') : [];

    for (let i = 0; i <= 999999; i++) { //완전 탐색, 이동하려는 최대 채널은 50만, 망가진 버튼을 고려해서 수를 잡는다.
        const str = String(i); //들어온 숫자를 한글자씩(버튼을 하나씩 누르니까) 검사하기 위해서 String으로 변경한다.
        let check = false; //망가진 버튼에 숫자가 포함되어있는지 확인하는 상태.

        for (let j = 0, n = str.length; j < n; j++) {
            if(troubleBtn.includes(str[j])) {
                check = true; //고장난 버튼 누르려는거 발견
                break;
            }
        }
        if(check) continue; //고장난 버튼때문에 바로 i를 못누르면 스킵하기.

        //i가 고장난 버튼에 해당 안되어서 바로 누를 수 있으면 누른 후 +.- 버튼 누르기, "절대값"을 구해서 더한다.
        count = str.length + Math.abs(i - +inputN);

        min = Math.min(min, count); //더 적은 횟수로 채널이동이 가능한 것을 발견하면 최솟값을 변경해준다.
    }
    //숫자키 이용 vs 버튼키만 이용 중 더 작은 값을 정답으로 리턴한다.
    return Math.min(onlyUpDown, min);
}


