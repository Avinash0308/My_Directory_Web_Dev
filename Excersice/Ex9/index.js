// Create a faulty Calculator using Javascript
// This faulty calculator does following:
// 1. It takes two numbers as input from User
// 2. It performs wrong operation as follows (only 10% of the times):
//     + --> -
//     * --> +
//     - --> /
//     / --> **

const prompt = require("prompt-sync")();

function print(val) {
  console.log("Hey! Here is the output: " + val);
}
console.log(
  "Hey welcome to user interface of newly built under test calculator."
);
console.log(
  "It takes two number as input and will ask you for the specific operation you want to perform"
);
console.log("So firstly input the two numbers one by one");
var a = prompt("Here goes the first one: ");
var b = prompt("Now please input the second one: ");
console.log(
  "Great\nNow here is the list of operations you can perform:\n1.>Addition\n2.>Multiplication\n3.>Division\n4.>Subtraction"
);
var c = prompt("Please input the id of operation you want to perform: ");
var rand = Math.random();
if (c == 1) {
  if (rand > 0.1) {
    print(a + b);
  } else {
    print(a - b);
  }
} else if (c == 2) {
  if (rand > 0.1) {
    print(a * b);
  } else {
    print(a + b);
  }
} else if (c == 3) {
  if (rand > 0.1) {
    print(a / b);
  } else {
    print(a ** b);
  }
} else if (c == 4) {
  if (rand > 0.1) {
    print(a - b);
  } else {
    print(a / b);
  }
} else {
  console.log("\n Hat Bhadwe \n");
}
