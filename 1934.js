const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const ans = [];

for (let i = 1; i <= +input[0]; i++) {
    let [A, B] = input[i].split(' ').map(Number);
    if (A < B) [A, B] = [B, A];
    const [C,D] = [A,B];

    while(B!==0){
        const n = A%B;
        A = B;
        B = n;
    }
    ans.push(C*D/A);
}

console.log(ans.join('\n'));