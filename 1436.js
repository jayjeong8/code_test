const input = require('fs').readFileSync('/dev/stdin');
let N = Number(input);

for (let i = 666; ; i++) {
    let title = i.toString();
    if (title.includes('666')) N--;
    if (N === 0) {
        console.log(i);
        break;
    }
}