//max
let array = [6, 2, 1, 8, 10];
let maxnum = Math.max(...array); //بيفرز المصوفه وبيطلع اكبر رقم فيها
let minnum = Math.min(...array);
let finalnum = array.filter((ele) => ele !== maxnum && ele !== minnum);
let result = finalnum.reduce((a, b) => a + b);
console.log(result);
