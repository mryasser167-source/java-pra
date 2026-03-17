function yasser(st) {
  let a = st.split("");
  let b = a.map((ele) => ele.repeat(2)).join("");
  return b;
}
console.log(yasser("ali")); //aallii
