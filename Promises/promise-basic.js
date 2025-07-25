promise = new Promise((resolve, reject) => {
    const age = 10;
    if (age > 18) resolve('Ur an adult')
    else reject('Ur not an adult')
})

promise.then((result) => {
    console.log("INSIDE THEN");
    console.log(result)
})

promise.catch((result) => {
    console.log("INSIDE CATCH");
    console.log(result)
})