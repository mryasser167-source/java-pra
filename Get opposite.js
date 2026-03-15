let input = document.querySelector("input");

let result = document.querySelector("div");
console.log(result);

function Getopposite() {
  let postive = input.value;
  let negative = input.value * -1;
  result.innerHTML = `the positive num=${postive} : the negative num=${negative}`;
}
input.addEventListener("input", Getopposite);
