let array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
let result = function () {
  let counter = 0;
  array.map(function (ele) {
    if (ele === true) {
      counter++;
    }
  });
  return counter;
};
console.log(result);
