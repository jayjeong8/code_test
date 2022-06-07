//10진수로 바꾸고 싶을 때는 parseInt(바꿀값,몇진법인지)

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [value, notation] = input;
console.log(parseInt(value,Number(notation)));