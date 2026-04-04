function ya(...array) {
  return array.reduce((a, b) => a + b) / array.length;
}
console.log(ya(1, 2, 3));
