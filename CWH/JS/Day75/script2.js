console.log("This is promises");

let prom1 = new Promise((resolve,reject) => {
    let a = Math.random();
    if( a < 0.5){
        reject("No random number was not supporting you");
    }
    else{
        setTimeout(() => {
            console.log("Yes I'm done");
            resolve("Harry");
        },1000);   
    }    
})

let prom2 = new Promise((resolve,reject) => {
    let a = Math.random();
    if( a < 0.5){
        reject("No random number was not supporting you 2");
    }
    else{
        setTimeout(() => {
            console.log("Yes I'm done 2");
            resolve("Harry 2");
        },1000);   
    }    
})

let prom3 = new Promise((resolve,reject) => {
    let a = Math.random();
    if( a < 0.5){
        reject("No random number was not supporting you 3");
    }
    else{
        setTimeout(() => {
            console.log("Yes I'm done 3");
            resolve("Harry 3");
        },1000);   
    }    
})

// prom1.then((a)=>{
//     console.log(a);
// }).catch((a) => {
//     console.log(a);
// }).finally((a) => {
//     console.log("just checking",a);
// })

let p3 = Promise.all([prom1,prom2,prom3]);
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})

let p4 = Promise.reject([prom1,prom2,prom3]);
p4.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})