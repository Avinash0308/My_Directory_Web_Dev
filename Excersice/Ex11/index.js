// write a program to calculate factorial of a number, using reduce and using for loops


const prompt = require("prompt-sync")();

let n = prompt("Print input the number to find its factorial: ");

let val = 1;
for(let i = 1; i<=n; i++){
    val = val*i;
}
console.log("Factorial of ",n," is ",val);

// let arr = [];
let arr = Array.from(Array(n+1).keys());
console.log(arr.slice(1,));
// for(let i = 1 ;i<=n; i++){
//     arr.push(i);
// }

const red = (a,b) =>{
    return a*b;
}

// console.log("Factorial of ",n," is ",arr.slice(1,).reduce(red));