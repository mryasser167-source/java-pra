function yaser(array) {
  let newarray = [];
  array.map((ele) => {
    ele > 0 ? newarray.push(ele * -1) : newarray.push(ele);
    if (array === []) {
      return newarray.push([]);
    }
  });
  return newarray;
}
console.log(yaser([1, 2, 3, 4, 5, 6, 7, 8])); //[-1, -2, -3, -4, -5, -6, -7, -8]
console.log(yaser([-1, -2, -3, -4, -5, -6, -7, -8])); //[-1, -2, -3, -4, -5, -6, -7, -8]
console.log(yaser([])); //[]
