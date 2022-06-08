//1번부터 N번까지 사람들이 원을 이루면서 앉아있고, N보다 작은 K가 주어진다.
//순서대로 K번째 사람을 제거하는데, 제거될 때 마다 남은 사람들의 원을 따라 과정을 반복한다.
//모두 제거될 때 까지 계속하여, 원에서 사람들이 제거되는 순서를 구하라.

//나머지값을 이용해서 배열에서 제거할 수 있을 것 같다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

const [n,k] = input.map(Number);
const people = new Array(n);
const answer = [];

let person = 1;
for (let i=0; i<n; i++){
    people[i] = person++; //ex-[1,2,3,4,5,6,7]
}

while(people.length) {
    if(people.length === 1){
        answer.push(people.shift());
        break;
    }

    for(let i=0; i<k-1; i++){
        people.push(people.shift());
    }
    answer.push(people.shift());
}

console.log(`<${answer.join(', ')}>`);

