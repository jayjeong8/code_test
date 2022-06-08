//정수를 저장하는 큐 구현하기
//6가지 명령에 따라 명령 처리 결과를 출력하기

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [n, ...commands] = input;

const queue = [];
let answer = [];
const commandObj = {
    'push': pushX,
    'pop': pop,
    'size': size,
    'empty': empty,
    'front': front,
    'back': back,
}

for (let i = 0; i < n; i++) {
    const command = commands[i].split(' ');
    commandObj[command[0]](command[1] ? command[1] : null);
}
console.log(answer.map(Number).join('\n'));


function pushX(x) {
    queue.push(x);
}

function pop() {
    queue.length ? answer.push(queue.shift()) : answer.push('-1');
}

function size() {
    answer.push(queue.length);
}

function empty() {
    answer.push(queue.length ? 0 : 1);
}

function front() {
    answer.push(queue.length ? queue[0] : -1);
}

function back() {
    answer.push(queue.length ? queue[queue.length - 1] : -1);
}