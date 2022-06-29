//스타트와 링크
//스타트링크에 다니는 사람들이 축구를 해보려고 한다. 모인사람은 N명이고 짝수이다.
//N/2명으로 이루어진 스타트팀과 링크 팀으로 사람들을 나눠야 한다.
//각 사람에게 1부터 N까지 번호를 배정하고 능력치를 조사했는데
//능력치는 i번 사람과 j번 사람이 같은 팀에 속했을 때 팀에 더해지는 능력치이다.
//팀의 능력치는 팀에 속한 모든쌍의 능력치 합이다. 팀원 구성을 통해서 각 팀의 능력치 차이를 최소로 만들려고 한다.

const [inputN, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(inputN);
const status = cases.map(e => e.split(' ').map(Number));

//풀이 3 - 비트마스크 11876KB 464ms
let ans = 9876543210;
for (let i = 1; i < (1 << N); i++) { //1을 N만큼 왼쪽으로 이동한 것 (시프트 연산) ex) 100000
    let count = 0;
    for (let j = 0; j < N; j++) {
        if ((i & (1 << j)) === 0) { //1182와는 다르게 0인 경우를 카운트 한다. (상대팀)
            count++;
        }
    }
    if (count != N / 2) continue; //팀이 반반으로 나뉠때 까지 카운트한다.

    //위 조건문을 통해 팀이 반반이 된 후 넘어오면 각 팀에 팀원 넣어주기
    const team1 = [];
    const team2 = [];
    for (let k = 0; k < N; k++) {
        if ((i & (1 << k)) === 0) {
            team1.push(k);
        } else {
            team2.push(k);
        }
    }

    //각 팀의 능력치를 비교하기
    let score1 = 0;
    let score2 = 0;
    for (let l1 = 0; l1 < N / 2 - 1; l1++) {
        for (let l2 = l1 + 1; l2 < N / 2; l2++) {
            score1 += status[team1[l1]][team1[l2]] + status[team1[l2]][team1[l1]];
            score2 += status[team2[l1]][team2[l2]] + status[team2[l2]][team2[l1]];
        }
    }
    const diff = Math.abs(score1 - score2);

    ans = Math.min(ans, diff);
}

console.log(ans);


/* 풀이 2 10956KB 240ms (overWrapCheck 사용 안할시 10412KB 268ms)
const teamA = [], teamB = [];
let answer = 987654321;
let overWrapCheck = false;

makeTeam(0);
console.log(answer);

function makeTeam(count) {
    if(teamA.length === 1 && teamB.length === N-1){ //teamA에는 0만 있고 나머지 요소가 전부 teamB에 들어가면 그 이후는 중복된 케이스이다.
        overWrapCheck = true;
    }
    if (count === N) {//카운트가 N만큼 찼을 때
        if (teamA.length === N / 2) { //팀1에 인원이 반만큼 차있다면,
            const curr = teamCompare(teamA, teamB); //팀의 능력치를 비교하고 
            answer = Math.min(answer, curr); //그 값을 최소값과 비교한다. 
        }
        return;
    }

    if(!overWrapCheck){
        if (teamA.length < N / 2) { //A가 N/2만큼 찰때까지만 a에 넣는다.
            teamA.push(count);
            //N이 4면 처음에 A에 0, 그다음 pop되기 전에 재귀로 1이 추가로 들어가고 1이 pop되기 전에 B에 2, 3이 차례로 들어간다.
            //2,3이 끝나고 pop되고 나면 다시 1이 들어갔을 때의 makeTeam재귀가 끝난 후로 빠져나오고 1이 pop된다. 그리고 나서 teamB에 현재 카운트인 1이 들어가고
            //makeTeam(2)가 실행된다. 그럼 다시 0이 남아있는 A에 2가 들어가고 makeTeam(3)이 실행되면 A엔 자리가 없으니 B에 3이 들어간다.
            //B에 3이 들어간 후 makeTeam(4)를 실행하면 count가 N이 되어서 return후 3이 pop되고, A에 2가 들어갔을 때 실행된 makeTeam(3)이 종료되어
            //A의 2가 pop된다. 그리고나서 B에 2가 들어가고 makeTeam(2+1)이 실행되면 A에 빈자리가 있으므로 다시 A에 3이 들어가고 비교한다.
            makeTeam(count + 1);
            teamA.pop();
        }

        teamB.push(count);
        makeTeam(count + 1);
        teamB.pop();
    }
}

function teamCompare(arr1, arr2) {
    let score1 = 0;
    let score2 = 0;

    for (let i = 0; i < arr1.length - 1; i++) { //첫번째 사람과 두번째 사람, 1-3 1-4... 방식으로 구하고 상대방이 이쪽과 있을 때 능력치 함께 구해서 더하기
        for (let j = i + 1; j < arr1.length; j++) {
            score1 += status[arr1[i]][arr1[j]] + status[arr1[j]][arr1[i]];
            score2 += status[arr2[i]][arr2[j]] + status[arr2[j]][arr2[i]];
        }
    }
    return Math.abs(score1 - score2);
}
*/


/* 풀이 1 13672KB 600ms

//서로 겹치지않게 N/2만큼 팀을 짜고 점수를 비교한다.
const teamCheckArr = new Array(N);
for (let i = 0; i < N; i++) {
    teamCheckArr[i] = i;
}

const team1 = [];
let overwrapCheck = [987654321];
let overwrap = false;
let answer = 987654321;

makeTeam(0, 0);
console.log(answer);


function makeTeam(count, idx) {
    if (overwrapCheck.join('') === team1.join('')) {
        overwrap = true;
        return;
    }
    if (count === N / 2) {
        const team2 = teamCheckArr.filter(e => !team1.includes(e));
        overwrapCheck = team2;
        teamCompare(team1, team2);
        return;
    }
    for (let i = idx; i < N; i++) {
        if(!overwrap){
            team1.push(i);
            makeTeam(count + 1, i + 1);
            team1.pop();
        }
    }
}

function teamCompare(team1, team2) {
    let team1Score = 0;
    let team2Score = 0;
    for (let i = 0; i < N / 2; i++) {
        for (let j = 0; j < N / 2; j++) {
            if (j !== i) {
                team1Score += status[team1[i]][team1[j]];
                team2Score += status[team2[i]][team2[j]];
            }
        }
    }
    answer = Math.min(answer, Math.abs(team1Score - team2Score));
}*/
