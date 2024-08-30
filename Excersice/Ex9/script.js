let a = prompt("First value")
let b = prompt("Second Value")
let c = prompt("Operation")
let action = {
    "+" : "-",
    "-" : "/",
    "/" : "**",
    "*" : "+"
}
let rand = Math.random()
if(rand <= 0.1){
    c = action[c]
}
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)