let btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    // alert("I was harrassed");
    document.querySelector(".box").innerHTML = "<b> You were harrassed, I'm enjoying";
})
btn.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<b>I'm here to save you";
})
btn.addEventListener("contextmenu",()=>{
    alert("Hat BSDK");
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.code);
})