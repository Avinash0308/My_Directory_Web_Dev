function nice(name) {
    console.log("HEy " + name + " you are cool");
    console.log("HEy " + name + " you are hat");
    console.log("HEy " + name + " you are bhag");
    console.log("HEy " + name + " you are nikal");
}

function sum(a, b){
    console.log(a+b);
    return a+b;
}

function div(a,b,c=10){
    return (a+b)/c;
}

nice("Anil")
nice("Avi")
nice("Til")
sum(10,8);
var result = sum(10,9);
console.log("The sum of these numbers is: ",result);

console.log(div(10,20));

const func1 = (x)=>{
    console.log("I am an array function ",x);
}

func1(10);
func1(100);
func1(1000);