function yasser(boolan) {
  let tru = "YES";
  let fals = "NO";

  return boolan ? `this is ${tru}` : `this is ${fals}`;
}
console.log(yasser(false));
