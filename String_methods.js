/* anchor() */
const myStr = 'anchor testing';
//document.body.innerHTML = myStr.anchor('anchor');

const myAnc = 'anchor';
const res = '<a name="' + myAnc + '">anchor testing</a>';
document.body.innerHTML = res;
console.log(res);

/* big() */
const myStr = 'big tag testing';
console.log(myStr.big());

const res = '<big>' + myStr + '</big>';
console.log(res);

/* charAt */
const myStr = 'sigappuraj';
const index = 3;
console.log(`Index ${index} is ${myStr.charAt(index)}`);

console.log(`Index ${index} is ${myStr[index]}`);

/* concat */
const str1 = 'sigappu';
const str2 = 'raj';
console.log(str1.concat(str2));

console.log(str1 + str2);

/* endsWith */
const myStr = 'sigappuraj';
const endStr = 'j';
console.log(myStr.endsWith(endStr));

if (myStr[myStr.length - 1] == endStr) {
    console.log('true');
} else console.log('false');

/* fixed() */
const myStr = 'method creates a <tt> HTML element that causes a string to be displayed in fixed-pitch font.';
console.log(myStr.fixed());

const res = '<tt>' + myStr + '</tt>';
console.log(res);

/* fontcolor() */
const myStr = 'sigappuraj';
console.log(myStr.fontcolor('red'));

const res = '<font color="red">' + myStr + '</font>';
console.log(res);

/* includes() */
const myStr = 'sigappu raj';
const str = 'raj';
console.log(`word ${str} ${myStr.includes(str) ? 'is' : 'is not'} found`);

const myArr = ['sigappu', 'raja'];

let flag = false;
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == 'raj') {
        flag = true;
        break;
    }
}
if (flag == true) console.log(`word ${str} is found`);
else console.log(`word ${str} is not found`);

/* startsWith() */
const myStr = 'sigappuraj';
const searchStr = 'sig'
console.log(myStr.startsWith(searchStr));

let res = ''
for (let i = 0; i < searchStr.length; i++) {
    res += myStr[i];
}
if (res == searchStr) console.log('true');
else console.log('false');

/* substring */
const myStr = 'sigappuraj';
const start = 0;
const end = 3;
console.log(myStr.substring(start, end));

let res = '';
for (let index = start; index < end; index++) {
    res += myStr[index]
}

console.log(res);