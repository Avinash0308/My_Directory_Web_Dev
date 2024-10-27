console.log("Loops\n");

let a = 1;
console.log(a);
console.log(a + 1);
console.log(a + 2);

for (let index = 0; index < 10; index++) {
  console.log(index);
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "AI",
    sdj:"dfs"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

for (const c of "Harryry") {
    console.log(c);
}

let i = 0;
while(i<5){
    console.log(i**i);
    i++;
}

do {
    console.log(i**i);
    i++;
} while (i<10);