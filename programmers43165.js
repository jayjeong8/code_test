function solution(numbers, target) {
    var answer = 0;

    const dfs = (idx, sum) => {

        if(idx === numbers.length){
            if(sum === target){
                answer ++;
            }

            return;
        }

        dfs(idx+1, sum + numbers[idx]);
        dfs(idx+1, sum - numbers[idx]);
    }

    dfs(0,0);

    return answer;
}

//주어진 수들을 '순서대로' 더하기 혹은 빼기를 해서 target과 동일한 수를 만들기.