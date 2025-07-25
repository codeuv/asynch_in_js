const promise = new Promise((r,re)=>{
    r('Promise is resolved')
})

const promise1 = new Promise((re, rj) => {
    re('Promise1 is rejected')
})

const promise2 = new Promise((re, rj) => {
    re('Promise2 is resolved')
})

// promise.then(
//     (result) => {
//         console.log(result);
//         return promise1
//     }
// ).then(
//     (result) => {
//         console.log(result);
//         return promise2
//     }
// ).catch(
//     (result) => {
//         console.log("inside catch -- 08");
//         console.log(result);
//         return promise2
//     }
// ).then(
//     (result) => {
//         console.log(result);
//     }
// ).catch(
//     (result) => {
//         console.log("inside catch --09");
//         console.log(result);
//     }
// )

// -----------------------------------

// promise.then(
//     (result) => {
//         console.log(result);
//         return promise1
//     }
// ).then(
//     (result) => {
//         console.log(result);
//         return promise2
//     }
// ).then(
//     (result) => {
//         console.log(result);
//     }
// ).catch(
//         (result) => {
//             console.log("inside catch -- 08");
//             console.log(result);
//             return promise2
//         }
// ).catch(
//     (result) => { 
//         console.log("inside catch --09");
//         console.log(result);
//     }
// )

Promise.all([promise,promise1,promise2])
.then((data)=>console.log(data,data[0],data[1],data[2]))
.catch((data)=>console.log(data,data[0],data[1],data[2]));

