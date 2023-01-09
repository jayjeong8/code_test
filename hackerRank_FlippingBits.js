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
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

// 32bit 부호없는 정수 배열을 받아서 2진법일 경우의 1과 0을 바꾸고 다시 부호없는 정수로 리턴하는 문제
//
function flippingBits(n) {
    // ~ : Not 연산자, 0은 1로, 1은 0으로 바꾼다.
    // >>> : 부호없는 오른쪽 시프트 연산자, 0만큼 밀고(변화X) 부호없는 정수값을 반환한다.
    return ~(n) >>> 0
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
