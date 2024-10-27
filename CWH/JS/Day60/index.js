// STRINGS ARE IMMUTABLE
console.log("This is string tutorial");
let a = "Harry";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);
console.log(a.length);
let realname = "Harry";
let friend = "Rohan";
console.log("His name is " + realname + " and his friends name is " + friend);

console.log(`His name is ${realname} and his friends name is ${friend}`);

let x = 'Avi"nash';
let y = `Avi"nash`;
console.log(x + y);

// \n new line
let b = "ShivamSh";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 4));
console.log(b.slice(1, 5));
console.log(b.slice(1));
// console.log(b.slice(1))
console.log(b.replace("Sh", "he"));
console.log(b);

console.log(b.concat(x));
console.log(b.concat(x, "adosif", "odf", "sdf"));
let xy = "  hspuf  ";
console.log(xy);
console.log(xy.trim());
