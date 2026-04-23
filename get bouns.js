function ya(salary, bouns) {
  return bouns ? `${salary * 10}$` : `${salary}$`;
}
console.log(ya(200, false));
