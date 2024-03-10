var u = "umesh";
let i = " is good ";
const j = " boy";
document.body.innerText = `${u} ${i} ${j}`;
var arr = [1, 2, 3, 4, 5, 6];
document.body.innerText = `${arr[0]}`;
var objects = { name: "umesh", age: 20, sex: "M" };

var arrSquare = arr.map((a) => {
	return a * a;
});
document.body.innerText = `${arrSquare}`;
// array destruction
const [a, b, c, d, e, f] = arr;
document.body.innerText = `${a} ${b} ${c} ${d} ${e} ${f}`;
// object destruction
const { name, sex } = objects;
document.body.innerText = `${name} ${sex}`;
