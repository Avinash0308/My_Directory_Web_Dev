let a = [1,2,3,2,3,45,64]

for(let index = 0; index<a.length; index++){
    console.log(a[index]);
}

a.forEach((value, index, arr)=>{
    console.log(value, index)
})

let obj = {
    a:1,
    b:2,
    c:3
}

for(const key in obj){
    if(Object.hasOwnProperty.call(obj,key)){
        console.log(key, obj[key]);
    }
}

for (const iterator of a) {
    console.log(iterator);
}

