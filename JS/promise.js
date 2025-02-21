// let promise = new Promise(function(resolve, reject){
//     alert("I am in a alert in promise");
//     resolve(56);
// })

// console.log("Hello One");
// setTimeout (function(){
//     console.log("Hello two in 2 seconds")
// }, 2000)

// console.log("My name is" + "Hello Three");
// console.log(promise);


let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I'm  a Promise and i'm fullfilled");
        resolve(true);
    }, 5000)
})


let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        // console.log("I'm  a Promise and i'm rejected");
        reject(new Error("I am an error"))
    }, 5000)
})

p1.then((value)=>{
    console.log(value);
})
// p2.catch((error)=>{
//     console.log("some error occured in p2");
// })

p2.then((value)=>{
    console.log(value);
}, (error)=>{
    console.log(error);
})