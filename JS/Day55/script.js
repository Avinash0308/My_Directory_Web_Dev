console.log("Hey this is me.");

var a = 5;
var b = 6;
console.log(a + b + 8);

var c = "Avi";
console.log(c);

console.log(typeof a, typeof b, typeof c);

var _a = "Shubham";
// var 55a = "Rohan" invalid
//js is case sensitive
var A = "avi";
console.log(A);

// var globally scoped
// let && const is block scoped

const a1 = 6;
// a1 = a1 + 1; not possible
console.log(a1);

//use let over var

var x = 100;

{
  var x = 66;
  console.log(x + 1);
}

console.log(x);

let y = 100;

{
    let y = 10;
    console.log(y+1);
}
console.log(y);

//primitive data types
let a2 = "Avi";
let b2 = 22;
let c2 = 3.55;
const d2 = true;
let e2 = undefined;
let f2 = null;
console.log(a2,b2,c2,d2,e2,f2);
console.log(typeof a2,typeof b2,typeof c2,typeof d2,typeof e2,typeof f2);
// null is primitive but typeof prints object

//object data type
let o = {
    "name": "Avi",
    "job role": "Hardware Chakhna",
    "is_handsome": "false"
}

console.log(o);

o.salary = "100paisa";

console.log(o);

o.salary = "500paisa";

console.log(o);

var str = "avi";
console.log(str+1);
console.log(typeof str);

const obj = {
    "name": "avinash"
}
console.log(obj);

obj.num = 523;

console.log(obj);

obj.num = 10;
console.log(obj)