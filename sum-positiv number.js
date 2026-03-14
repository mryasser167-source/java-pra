let array = [1, -4, 7, 22];
let positivnumber = array.filter((ele) => ele > 0);
let result = positivnumber.reduce((a, b) => a + b);
console.log(result);
