//한자리 숫자가 적힌 종이조각을 붙여서 총 몇개의 소수를 만들 수 있는지 알아내려고 한다.

//주어진 넘버로 만들 수 있는 가장 큰 수를 만들고 그 안에 들어있는 소수를 전부 구한 뒤에 조합된 수가 소수인지 아닌지 확인해보는 것은 어떨까

function solution(numbers) {
    const numArray = numbers.split('').map(Number).sort((a,b)=> b-a);
    const bigNum = Number(numArray.join(''));

    const combiNumArr = makePaperNum(numArray);
    const answer = primeCheck(bigNum, combiNumArr);

    return answer;
}

function makePaperNum(numArray) {
    //종이조각으로 숫자 만들기
    const combiNumArr = [];

    const length = numArray.length;
    const visited = new Array(length).fill(false);

    const dfsArray = [];
    const dfs = (count) => {
        combiNumArr.push(Number(dfsArray.join('')));

        if(count === length) {
            return;
        }

        for(let i=0; i<length; i++){
            if(!visited[i]){
                visited[i] = true;
                dfsArray.push(numArray[i]);
                dfs(count + 1);
                dfsArray.pop();
                visited[i] = false;
            }
        }
    }

    dfs(0);

    return combiNumArr;
}

function primeCheck(bigNum, combiNumArr){
    //소수 구하기 에라토스테네스의 체
    const primes = new Array(bigNum+1).fill(true);
    primes[0] = false;
    primes[1] = false;

    for(let i=2, n = Math.sqrt(bigNum); i <= n; i++) {
        for(let j=i*i; j<=bigNum; j += i) { //bigNum을 포함하여 조사하기
            primes[j] = false;
        }
    }

    //만든 숫자들 중 소수가 몇개인지 판별하기 (중복 제거)
    let answer = 0;

    const combiSetArr = [...new Set(combiNumArr)];

    combiSetArr.forEach(n => {
        if(primes[n]) {
            console.log(n)
            answer++
        }
    })

    return answer;
}