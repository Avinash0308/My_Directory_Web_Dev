let arr = [1,3,2,3,4,5,6,7];

// let newa = []

// for(let index = 0; index<arr.length; index++){
//     newa.push(arr[index]**2);
// }   

let newa = arr.map((value, index, arr)=>{
    return value**2;
})

console.log(newa);

console.log(newa)
const greaterThanSever = (e) =>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(newa.filter(greaterThanSever));

let arr2 = [1,2,3,4,56,7];
const red = (a,b)=>{
    return a*b;
}
console.log(arr2.reduce(red));