const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);


let sum = 0;
for (let i=1; i<=input[0]; i++){
    sum+=input[i];
}
//산술평균
let average = Math.round(sum/input[0])
console.log(average === -0 ? 0 : average);

let nums = input.slice(1).sort((a,b) => a-b);
//중앙값
console.log(nums[Math.floor(input[0]/2)]);

//최빈값, 가장 많이 나타나는 값, 여러개 있을 때는 최빈 값 중 두번째로 작은 값을 출력한다.
let modeObj = {};
for(let i=0; i<input[0]; i++){
    modeObj[nums[i]] ? modeObj[nums[i]]++ : modeObj[nums[i]] = 1;
}
let modeArray = Object.entries(modeObj);

modeArray.sort((a,b)=> a[0]-b[0]);
modeArray.sort((a,b)=> b[1]-a[1]);
if(modeArray[1]) {
    if(modeArray[0][1] === modeArray[1][1]){
        console.log(modeArray[1][0]);
    }else{
        console.log(modeArray[0][0]);
    }
} else {
    console.log(nums[0]);
};

//범위
console.log(nums[input[0]-1] - nums[0]);
