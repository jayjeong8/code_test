//태그와 단어가 포함된 문자열 S가 주어진다.
//<태그>는 뒤집지 않고 각 단어는 제자리에서 뒤집어서 출력한다.
//단어와 단어 사이에는 공백이 있고, 태그와 단어 사이에는 공백이 없다.
//태그는 연달아 나올 수도 있으며 태그와 태그 사이에도 공백이 없다.

//한글자씩 검사해서 <가 나오면 > 가 나올때까지 넣는다.
//<를 포함하지 않은 배열만 split한 후에 reverse하고 join한다.
//검사하다가 빈공간을 만나면 따로 한칸을 배정한다.

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

// 코드 2 /////////////////////////////

//<>에 문자 하나 이상 포함하는 문자열 혹은 공백문자(\s),
//()로 split할 때 기억했다가 <>와 공백을 배열에 포함시킨다.
//.(모든문자)+?(1회 이상 반복되는 문자에 가능한 적게 일치)
const re = /(<.+?>|\s)/g;
const tmp = input.split(re);
let result = [];

tmp.map(i => {
    if (re.test(i)) { //정규식에 통과하면 그냥 더하고(태그와 띄어쓰기)
        result += i;
    } else { //통과 못하면 뒤집어서 더한다.
        const a = i.split("").reverse().join("");
        result += a;
    }
});

console.log(result);



// 코드 1 /////////////////////////////
/*
//임시값과 태그인지 아닌지 판별하는 변수 추가
let temp = "", ans = "";
let isTag = false;

//input을 한글자(a)씩 비교
for (let a of input) {
    if (a === "<") {
        isTag = true; //태그의 시작 감지
        ans += temp.split('').reverse().join('') + a; // '<' 이전에 temp에 쌓인 값을 reverse
        temp = ''; //여기서부터 태그니까 비워주기
    } else if (a === '>') {
        isTag = false; //태그의 끝 감지
        ans += temp + a; //태그 안 내용 더하기
        temp = ''; //여기까지 태그니까 비워주기
    } else if (a === ' ') {
        //isTag로 현재 태그 안인지 밖인지 구분해서 ans에 값 더해주기, 띄어쓰기도 추가해주기
        ans += (!isTag ? temp.split('').reverse().join('') : temp) + ' ';
        temp = '';
    } else {
        temp += a;
    }
}
//temp에 남아있는 값 더해주기;
ans += temp.split('').reverse().join('')

//\n이 포함되어있다면 빼주기
console.log(ans.replace(/\n/g, ''));*/
