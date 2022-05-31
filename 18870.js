const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const nums = input.split('\n').splice(1)[0].split(' ').map(Number);
const numSet = [...new Set(nums)].sort((a, b) => a-b);
const object = {};
const result = [];

numSet.forEach((item,index) => object[item] = index);
//indexOf 등으로 찾을 시 인덱스0부터 찾기 때문에 시간초과, 오브젝트의 키값을 이용해서 시간복잡도를 줄일 수 있다.
nums.forEach(i => result.push(object[i]));

console.log(result.join(' '));