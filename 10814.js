const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').splice(1);

let result = ''
const info = input.map(i => i.split(' '));

info.sort((a,b) => {
    if(+a[0] === +b[0]) return 0;
    if(+a[0] > +b[0]) return 1;
    if(+a[0] < +b[0]) return -1;
})

info.forEach(i => result += i.join(' ') + '\n');

console.log(result)