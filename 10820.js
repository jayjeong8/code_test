//한줄짜리 입력이 들어왔을 때 앞 뒤에 붙은 공백을 trim으로 날려버리면 안됨.
const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

const lower = /[a-z]/;
const upper = /[A-Z]/;
const nums = /\d/;
let ans = '';

input.forEach(i => {
    const result = [0, 0, 0, 0];
    const words = i.split('');
    //trim으로 자르지 못한 항목이나 문자열이 아닌 공백값이 들어온다면 필터링
    if(i !== '') {
        words.forEach(j => {
            if (lower.test(j)) result[0]++;
            if (upper.test(j)) result[1]++;
            if (nums.test(j)) result[2]++;
            if (j === ' ') result[3]++;
        })
        ans += result.join(' ') + '\n';
    }
})

console.log(ans.trim());
