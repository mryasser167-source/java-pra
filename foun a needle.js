let foundneedl = [
  "hay",
  "junk",
  "hay",
  "hay",
  "more junk",
  "needle",
  "more hay",
];
let a = function () {
  for (let i = 0; i <= foundneedl.length; i++) {
    if (foundneedl[i] === "needle") {
      return "Found a needle at position  " + i;
    }
  }
};
console.log(a());
