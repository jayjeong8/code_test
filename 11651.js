const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').splice(1);


let nums = input.map((i) => i.split(' ').map(Number))
let result = ''
nums.sort((a,b) =>  {
    if (a[1] === b[1])
        return a[0] - b[0];
    else
        return a[1] - b[1];
})

nums.forEach(i => {
    result += i.join(' ')+'\n';
})

console.log(result);