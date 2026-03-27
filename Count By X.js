function count(x, n) {
  let nums = [];
  for (i = x; i <= n; i++) {
    nums.push(i);
  }
  return nums;
}
console.log(count(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
