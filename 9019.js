//DSLR 명령어를 가진 계산기에는 0>= <10000 의 십진수를 저장할 수 있는 레지스터가 하나 있다.
//레지스터에는 n이 저장되어 있고, n의 4자리수를 명령어에 따라 나온 값으로 레지스터에 저장한다.


//위 공식을 이용해서 서로 다른 두 정수 A,B를 받아 A를 B로 바꾸는 최소한의 명령어를 생성한다.
//실행시킨 명령어의 나열을 출력한다.

const [input, ...cases] = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const N = Number(input);

const func = [D, S, L, R];
const words = ['D', 'S', 'L', 'R']; 
const ans = [];

for (let i = 0; i < N; i++) {
    const [A, B] = cases[i].split(' ').map(Number);
    const visited = new Array(10001).fill(0);
    visited[A] = 1;

    //어떤 명령어가 가장 효과적일지, 먼저 오게 될지 알 수 없으므로 전부 탐색해본다.
    //최단 명령어 개수를 사용해야 하므로 BFS로 찾아보자.

    const BFS = (start) => {
        const queue = [start];
        let number = 0;
        while (number !== queue.length) {
            const cur = queue[number];

            if(cur === B){
                ans.push(visited[cur]);
                break;
            }
            for (let i = 0; i < 4; i++) {
                const next = func[i](cur);
                if(!visited[next]){
                    queue.push(next);
                    visited[next] = visited[cur] === 1 ?  words[i] : visited[cur] + words[i];
                }
            }

            number++;
        }
    }

    BFS(A);
}

console.log(ans.join('\n'));

//D는 n을 2배로 바꾼다. 9999보다 큰경우 10000으로 나눈 나머지를 저장한다. (사실상 모든 수에 적용 가능)
//S는 n-1을 레지스터에 저장한다, n이 0이라면 9999가 대신 저장된다.
//L은 n의 각 자릿수를 왼쪽으로 이동시켜 결과를 레지스터에 저장한다. (가장 왼쪽자리는 가장 오른쪽으로 오게 됨)
//R은 위와 동일하나 오른쪽으로 이동시킨다. (가장 오른쪽 자리는 가장 왼쪽으로 오게됨)

function D(n) {
    return (n * 2) % 10000;
}

function S(n) {
    return (n + 9999) % 10000;
}

function L(n) {
    //n은 최대 4자리니까 들어오는 수의 10을 곱하고 만의자리를 날려서 한칸씩 왼쪽으로 당기고, 
    //여기에 n을 1000으로 나눈 것을 더해서 원래 천의자리수가 일의자리수로 살아남게 한다.
    return Math.floor(n * 10 % 10000 + n / 1000);  
}

function R(n) {
    //n은 최대 4자리니까 들어오는 수의 1000을 곱하고 만의자리를 날려서 세칸씩 왼쪽으로 당겨서 오른쪽으로 한칸 당긴 것 처럼 만들고, (일의자리수만 살아남음)
    //여기에 n을 10으로 나눈 것을 더해서 일의자리수를 제외하고 나머지가 살아남게 한다.. 
    return Math.floor(n * 1000 % 10000 + n / 10);
}
