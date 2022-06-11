const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').slice(1)
const nums = input[0].split(' ').map(Number);

let ans = 0;

nums.forEach(n => {
    let isPrime = true;
    if (n === 1) isPrime = false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    isPrime && ans++;
})

console.log(ans);
