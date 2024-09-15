console.log("Avi");

let avis = document.getElementsByClassName("box")
console.log(avis)
avis[2].style.backgroundColor = "red";
document.getElementById("second").style.backgroundColor = "red";

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})
// document.getElementsByTagName("div").style.backgroundColor = "yellow";

