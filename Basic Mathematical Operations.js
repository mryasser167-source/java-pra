function yasser(opera, value1, value2) {
  if (opera === "+") {
    return value1 + value2;
  }
  if (opera === "*") {
    return value1 * value2;
  }
  if (opera === "/") {
    return value1 / value2;
  }
}
console.log(yasser("/", 5, 5));
