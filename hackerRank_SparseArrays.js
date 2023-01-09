'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

/*// 방법 1
function matchingStrings(strings, queries) {
    const answer = new Array(queries.length).fill(0);

    for(const str of strings){
        // there are same queries. so check everything.
        queries.forEach((query,i) => {
            if(query === str) answer[i]++;
        })
    }

    return answer;
}*/

// 방법 2
function matchingStrings(strings, queries) {
    // 등장한 str을 키값으로 사용, 등장한 횟수만큼 객체에 저장한다.
    const cnt = strings.reduce((result, str)=> {
        result[str] = result[str] ? result[str] + 1 : 1;
        return result;
    },{});

    // queries에 있는 str을 순회하면서 cnt에 있는지 확인하고 있으면 해당 키값을 반환하고 없으면 0을 반환한다.
    return queries.map((query)=> cnt[query] || 0);
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
