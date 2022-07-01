//완전탐색 모의고사 레벨1

function solution(answers) {
    const person1 = [1,2,3,4,5]
    const person2 = [2,1,2,3,2,4,2,5]
    const person3 = [3,3,1,1,2,2,4,4,5,5]
    const result = [0,0,0];
    const ans = [];

    for(let i=0, n=answers.length; i<n; i++){
        if(answers[i] === person1[i%person1.length]) result[0]++;
        if(answers[i] === person2[i%person2.length]) result[1]++;
        if(answers[i] === person3[i%person3.length]) result[2]++;
    }

    const max = Math.max(...result);
    for(let p=0; p<3; p++){
        if(result[p] === max) {
            ans.push(p+1);
        }
    }

    return ans.sort((a,b) => a - b);
}