const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').splice(1);

const mySet = [...new Set(input)];

mySet.sort((a,b) =>  {
    if(a.length > b.length) return 1;
    if(a.length < b.length) return -1;
    if(a.length === b.length) {
        return a > b ? 1 : -1;
    }
})

console.log(mySet.join('\n'));