// search

let Arr: string[] = [];
let obj;
function search() {
  obj = {
    name: prompt("enter your name : "),
    age: prompt("rnter your age : "),
  };
  Arr.push(obj);
}
for (let i = 0; i < 3; i++) {
  search();
}
console.log(Arr);

function searchw() {
  let mohamad = prompt("enter your search : => ");
  let m = Arr.find((item) => item.name === mohamad);
  if (m) {
    console.log("ok");
  } else {
    console.log("nooo");
  }
}
searchw();
