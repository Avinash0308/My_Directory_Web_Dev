console.log("Harry is hacker");
console.log("Rohan is hecker");

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 0);

console.log("The End");

const callback = (arg)=>{
    console.log(arg)
}

const loadScript = (src, callback)=>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Avi");
    document.head.append(sc);
}

loadScript("script2.js", callback);