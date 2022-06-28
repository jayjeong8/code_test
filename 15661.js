//링크와 스타트 / 스타트링크 축구 2탄
//스타트팀과 링크팀으로 사람을 나누는데 두 팀의 인원수는 갖지 않아도 되며 한명 이상 있어야 한다.

const [inputN, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(inputN);
const status = cases.map(e => e.split(' ').map(Number));


const teamA = [], teamB = [];
let answer = 987654321;
let overwrap = false;
makeTeam(0);
console.log(answer);

function makeTeam(count) {
    if (teamB.length === 1 && teamB[0] === 0) {
        overwrap = true;
        return;
    }
    if (count === N) {
        if (teamA.length >= 1 && teamB.length >= 1) {
            const cur = teamCompare(teamA, teamB);
            answer = Math.min(answer, cur);
        }
        return;
    }

    if (!overwrap) {
        if (teamA.length < N) {
            teamA.push(count);
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

    if (arr1.length > 1) {
        for (let i = 0, n = arr1.length; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                score1 += status[arr1[i]][arr1[j]] + status[arr1[j]][arr1[i]];
            }
        }
    }
    if (arr2.length > 1) {
        for (let i = 0, n = arr2.length; i < n - 1; i++) {
            for (let j = i + 1; j < n; j++) {
                score2 += status[arr2[i]][arr2[j]] + status[arr2[j]][arr2[i]];
            }
        }
    }

    return Math.abs(score1 - score2);
}