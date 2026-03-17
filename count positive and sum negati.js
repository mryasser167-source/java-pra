let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let a = array.filter((ele) => ele < 0).reduce((a, b) => a + b);
let b = array.filter((ele) => ele > 0);
let c = [b.length, a];
console.log(c);
///simple
