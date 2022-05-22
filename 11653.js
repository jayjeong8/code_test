const input = require("fs").readFileSync('/dev/stdin').toString();
let n = Number(input);

let arr = new Array(n+1).fill(true);
let primeNums = [];

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
}