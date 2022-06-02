const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const result = [];
const stack = [];
for (let i=1; i<=+input[0]; i++){
    const order = input[i].split(' ');
    if(order[0]==='push'){
        stack.push(order[1]);
        continue;
    }
    if(order[0]==='pop'){
        result.push(stack.length ? stack.pop() : -1);
        continue;
    }
    if(order[0]==='size'){
        result.push(stack.length);
        continue;
    }
    if(order[0]==='empty'){
        result.push(stack.length ? 0 : 1);
        continue;
    }
    if(order[0]==='top'){
        result.push(stack.length ? stack[stack.length - 1] : -1);
        continue;
    }
}

console.log(result.join('\n'));