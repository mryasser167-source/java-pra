function Squareroot(array) {
  let newarray = [];
  array.map((ele) => {
    if (Number.isInteger(Math.sqrt(ele))) {
      newarray.push(Math.sqrt(ele));
    } else {
      newarray.push(ele * ele);
    }
  });
  return newarray;
}
console.log(Squareroot([4, 2, 9, 7, 3, 1]));
