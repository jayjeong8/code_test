// 문제 링크: https://www.hackerrank.com/challenges/jesse-and-cookies/problem
// 참고자료1: https://stackoverflow.com/questions/53807977/js-hackerrank-jesse-and-cookies-heap-problem-times-out
// 참고자료2: https://jun-choi-4928.medium.com/javascript%EB%A1%9C-heap-priority-queue-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-8bc13bf095d9

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


class Heap {
    constructor(heap) {
        this.heap = heap;
    }
    // heap자료구조는 트리형태로 구성된다.
    getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
    getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
    getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

    // 배열 가장 끝에 새 값을 추가하고 아래에서부터 올라가며 더 큰 값과 swap 한다.
    insert = (value) => {
        this.heap.push(value);
        this.heapifyUp();
    }

    // 아래에서부터 위로 swap
    heapifyUp = () => {
        let index = this.heap.length - 1;
        const lastInsertedNode = this.heap[index];

        while(index > 0){ // 루트노드에 도달하기 전까지
            const parentIndex = this.getParentIndex(index);

            // 부모 노드의 값이 마지막에 추가된 노드보다 크다면 자리를 아래쪽으로 옮긴다.
            if(this.heap[parentIndex] > lastInsertedNode) {
                this.heap[index] = this.heap[parentIndex]
                index = parentIndex;
            } else break;
        }

        // 마지막 추가된 노드의 자리를 찾았으므로(break) 추가한다.
        this.heap[index] = lastInsertedNode;
    }

    // 최상위노드(가장 작은 값)를 새 값으로 바꾸고 기존 값을 반환한다.
    remove = () => {
        const count = this.heap.length;
        const rootNode = this.heap[0];

        if (count <= 0) return undefined;
        else if (count === 1) this.heap = [];
        else {
            // 가장 마지막에 있는 노드를 최상위노드에 배치하고 위에서부터 노드를 swap한다.
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
        }

        return rootNode;
    }

    // 위에서부터 아래로 swap
    heapifyDown = (index=0) => {
        // let index = 0;
        const count = this.heap.length;
        const rootNode = this.heap[index];

        while(this.getLeftChildIndex(index) < count) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            // 왼쪽과 오른쪽 중 더 작은 값을 찾는다.
            const smallerChildIndex = rightChildIndex < count &&
            this.heap[rightChildIndex] < this.heap[leftChildIndex] ?
                rightChildIndex : leftChildIndex;

            // 자식 노드의 값이 현재 지정한 노드보다 작다면 자리를 위쪽으로 옮긴다.
            if(this.heap[smallerChildIndex] <= rootNode){
                this.heap[index] = this.heap[smallerChildIndex];
                index = smallerChildIndex;
            } else break;
        }

        this.heap[index] = rootNode;
    }

    // 초기에 입력받은 배열을 min heap에 맞게 정렬한다.
    sorted = () => {
        for (let i = this.heap.length>>1; i--;){
            this.heapifyDown(i);
        }
    }
}


/*
 * Complete the 'cookies' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 */

function cookies(k, A) {
    // 이미 좋은 쿠키인 것들은 빼고 heap을 만든다.
    const minHeap = new Heap(A.filter(el => el < k));
    // 쿠키가 1개 남았을 때 좋은 쿠키와 믹스하면 좋은 쿠키가 되므로 좋은 쿠키가 있는지 확인해놓는다.
    let hasGoodCookie = minHeap.heap.length < A.length;
    minHeap.sorted();

    let result = 0;

    while (minHeap.heap.length > 1) {
        const newCookie = minHeap.remove() + minHeap.remove() * 2;
        // 새로운 쿠키가 좋은 쿠키가 아닐 때만 heap 배열에 추가한다.
        if(newCookie < k) {
            minHeap.insert(newCookie);
        } else {
            // 좋은 쿠키가 만들어지면 좋은 쿠키를 가지고 있다고 표시한다.
            hasGoodCookie = true;
        }
        result++;
    }

    // 좋은 쿠키가 없었다면 -1을 반환한다.
    return hasGoodCookie ? result + minHeap.heap.length : -1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const A = readLine().replace(/\s+$/g, '').split(' ').map(ATemp => parseInt(ATemp, 10));

    const result = cookies(k, A);

    ws.write(result + '\n');

    ws.end();
}
