const input = require("fs").readFileSync('/dev/stdin').toString();
let n = Number(input);

//i가 2부터 시작해서 "N이 1인 경우 아무것도 출력하지 않는다"를 자동으로 만족한다.
let i = 2;
const result = [];

//n이 완전 나눠지기 전까지 while문 반복됨
while (n > 1) {
    //에라토스테네스의 체처럼 한번 i로 수가 들어오면 한계치까지 나누기 때문에 이후 배수는 전부 들어올 수 없게된다.
    //(ex- 2가 들어와서 나눠놓으면 4,8,16 등등 전부 불가)
    //자동으로 다음수가 소수가 아니면 n을 나눌 수 있는 다음 소수가 나올때 까지 i++ 하게된다.
    if (n % i === 0) {
        result.push(i);
        n /= i;
    } else {
        i++
    }
}
console.log(result.join('\n'));


//test 2
/*if(n===1){
    return;
}

const arr = new Array(n + 1).fill(true);
const primeSet = new Set;
// const primeNums = [];
const result = [];

for (let i = 2; i <= n; i++) {
    if(!arr[i]) continue;
    for (let j=i*i; j<=n; j+=i){
        arr[j] = false;
    }
}

for(let i=2; i<=n; i++){
    if(arr[i]) primeSet.add(i);
}

primeSet.forEach(p => {
    if(n===0) return false;
    while(n%p === 0) {
        result.push(p);
        n /=p;
    }
})

console.log(result.join('\n'));*/


//test 1
/*
for (let i=2; i <= n; i +=1) {
    if(arr[i]){
        for(let j=i*i; j<=n; j+=i){
            arr[j] = false;
        }
        primeNums.push(i);
    }
    if (i*i>n){
        primeNums.push(n);
    }
}

for(let k=0; k<primeNums.length; k++){
    while(n%primeNums[k]===0){
        console.log(primeNums[k]);
        n/=primeNums[k];
    }

    if(n===1) break;
}*/
