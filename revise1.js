//SetTimeout and set Interval


id = setInterval(()=>{
    console.log("I WILL RUN ")
},1000)

setTimeout(()=>{
    clearInterval(id)
},5000)

// CALL BACK HELL in "callbaks"


//promise will help u to solve callback hell -- it flattens the code

//promise has a  state it can be  - pending, fullfilled, reject
//promise object has a result - this will be set based on the resolve or reject
//promise object has 2 things 
// 1. fulfillreaction -- if it get resolved , the function r instrution inside the .then will sent to microtask queue and executed when stack is empty
//  1. rejectreaction--
//  if it get rejected, the
//  function r instrution inside the .catch will sent to microtask queue and executed when stack is empty

promise = new Promise((resolve, reject) => {
    const age = 10;
    if (age > 18) resolve('Ur an adult')
    else reject('Ur not an adult')
}).then((result) => {
    console.log("INSIDE THEN"); 
    console.log(result)
}).catch((result)=>{
    console.log("INSIDE CATCH");
    console.log(result)
})

