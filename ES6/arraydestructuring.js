// Array Destructuring
function getScores() {
   return [70, 80, 90];
}

let scores = getScores();

let x = scores[0], 
    y = scores[1], 
    z = scores[2];

// destructuring	
let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90


function getScores() {
   return [70, 80];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // undefined


function getScores() {
   return [70, 80, 90, 100];
}

let [x, y, z] = getScores();

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90


let [x, y ,...args] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(args); // [90, 100]


let a, b;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

function getItems() {
    return [10, 20];
}

let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;

console.log(thirdItem); // 

let [, , thirdItem = 0] = getItems();

console.log(thirdItem); // 0

let a, b;
[a = 1, b = 2] = [10];
console.log(a); // 10
console.log(b); // 2


function getItems() {
    return null;
}

let [x = 1, y = 2] = getItems();


function getItems() {
    return null;
}

let [a = 10, b = 20] = getItems() || [];

console.log(a); // 10
console.log(b); // 20