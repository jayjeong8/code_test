//덱 : 스택+큐, 처음과 끝에서 자료의 입력과 출력이 전부 가능한 형태

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const deque = [];
const ans = [];

const commandObj = {
    'push_front': push_front,
    'push_back': push_back,
    'pop_front': pop_front,
    'pop_back': pop_back,
    'size': size,
    'empty': empty,
    'front': front,
    'back': back
}

for (let i=1; i<= +input[0]; i++){
    const command = input[i].split(' ');
    const x = command[1] ? command[1] : null;
    commandObj[command[0]](x);
}

console.log(ans.join('\n'))

//정수 X를 덱의 앞에 넣는다.
function push_front(x){
    deque.unshift(x);
}

//정수 X를 덱의 뒤에 넣는다.
function push_back(x){
    deque.push(x);
}

//덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
function pop_front(){
    deque.length ? ans.push(deque.shift()) : ans.push('-1');
}

//덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
function pop_back(){
    deque.length ? ans.push(deque.pop()) : ans.push('-1');
}

//덱에 들어있는 정수의 개수를 출력한다.
function size(){
    ans.push(deque.length);
}

//덱이 비어있으면 1을, 아니면 0을 출력한다.
function empty(){
    deque.length ? ans.push('0') : ans.push('1');
}

//덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
function front(){
    deque.length ? ans.push(deque[0]) : ans.push('-1');
}

//덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
function back(){
    deque.length ? ans.push(deque[deque.length-1]) : ans.push('-1');
}



