/* Array.from */
const myArr = [1, 2, 3];
console.log(Array.from(myArr, x => x + x));

let resArr = [];
for (let index = 0; index < myArr.length; index++) {
    let tmp = myArr[index];
    resArr[index] = tmp + tmp;
}
console.log(resArr);

/* Array.concat */
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);

const resArr = [...array1];
for (let index = 0; index < array2.length; index++) {
    resArr[array1.length + index] = array2[index];
}
console.log(resArr);

/* Array.every */
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 4];

console.log(array1.every(isBelowThreshold));

let flag;
for (let i = 0; i < array1.length; i++) {
    if (array1[i] < 40) { flag = true } else { flag = false; break; }
}
console.log(flag);

/* Array.filter */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

let resArr = [];
let i = 0;
for (let index = 0; index < words.length; index++) {
    if (words[index].length > 6) {
        resArr[i] = words[index];
        i++;
    }
}
console.log(resArr);

/* Array.find() */
const array1 = [50, 1, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);

let res;
for (let index = 0; index < array1.length; index++) {
    if (array1[index] > 10) {
        res = array1[index]
        break;
    }
}
console.log(res);

/* Array.findIndex() */
const array1 = [5, 121, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

//funtion largeNumIndex(arr1) {
let res;
for (let index = 0; index < array1.length; index++) {
    if (array1[index] > 13) {
        res = index;
        break;
    }
}
//}
console.log(res);

//console.log(largeNumIndex(array1));

/* Array.includes() */
const pets = ['cat', 'dog', 'bat'];
const searchStr = 'cats';
console.log(pets.includes(searchStr));

let flag = false;
for (let index = 0; index < pets.length; index++) {
    if (pets[index] === searchStr) {
        flag = true;
        break;
    }
}
console.log(flag);

/* Array.join() */
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());

let res = '';
for (let index = 0; index < elements.length; index++) {
    if (res != '') {
        res = res + ',' + elements[index];
    } else res = elements[index];
}
console.log(res);

/* Array.map() */
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

let resArr = [];
for (let index = 0; index < array1.length; index++) {
    resArr[index] = array1[index] * 2;
}
console.log(resArr);

/* Array.reduce() */
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));

let res = 0;
for (let index = 0; index < array1.length; index++) {
    res += array1[index]
}
console.log(res);