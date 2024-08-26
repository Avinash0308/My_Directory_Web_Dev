console.log("hey lets run conditionals in javascript\n");

let age = 45;

if(age > 18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

let grace = 2;
if((age-grace) > 18){
    console.log("HEy");
}
else{
    console.log("NOE");
}

console.log(grace**3);
grace = 10;
console.log(grace%3);

let ab = 10;
ab += 3;
console.log(ab);
ab -= 3;
console.log(ab);

if(ab == 10){
    console.log("YES");
}
else console.log("NO");

// == , != , 

// === type + value

//comments

/*jsofhe
oihsofoe
oshfd*/

let size = 12;
if(size > 10){
    console.log("odhf");
}
else if(size == 10){
    console.log("YES");
}
else{
    console.log("hulele");
}

// ternary operator ?: // sab same hai, c++ chep rakhi hai, aish maro bhailog

switch (size) {
    case 11:
        console.log("Chal Gaya");
        break;

    default:
        console.log("Nahi Chala");
        break;
}