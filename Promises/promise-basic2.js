//using async and await
//it is just a sytax build over promise 
// use async just b4 function , it will always return a promise
// use await only inside the asynch function, it pauses the function untill the waited promise resolve or reject
//Instead of then and catch it uses try and catch
const preHeat = () => {
    return new Promise((resolve, reject) => {
        let preHeatOven = true;
        setTimeout(() => {
            if (preHeatOven) {
                resolve("Oven is preheated")
            } else {
                reject("Oven is not preheated")
            }
        }, 1000)
    })
}

const addSugarAndChoco = () => {
    return new Promise((resolve, reject) => {
        addChoco = true;
        setTimeout(() => {
            if (addChoco) {
                resolve("Choco added")
            } else {
                reject("Choco not added")
            }
        }, 1000)
    })
}

const addFlour = () => {
    return new Promise((resolve, reject) => {
        let addFlourandSugar = true;
        setTimeout(() => {
            if (addFlourandSugar) {
                resolve("Flour added, mix it well")
            } else {
                reject("Flour not added.")
            }
        }, 1000)
    })
}

const bakeIt = () => {
    return new Promise((resolve, reject) => {
        let baked = true;
        setTimeout(() => {
            if (baked) {
                resolve("bake ir for 24 mins.")
            } else {
                reject("Flout not added.")
            }
        }, 1000)
    })
}

//using promises

// preHeat().then((result) => {
//         console.log(result);
//         return addSugarAndChoco();
//     }).then((result) => {
//         console.log(result);
//         return addFlour();
//     }).then((result) => {
//         console.log(result);
//         return bakeIt();
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("Your Chocolate cake is ready...")
//     }).catch((result) => {
//         console.log(result);
//         console.log("You skipped a step so no cake")
//     })


//using async and await
const makechocolate = async () =>{
    try{
        const step1 = await preHeat();
        console.log(step1)
        const step2 = await addSugarAndChoco();
        console.log(step2)
        const step3 = await addFlour();
        console.log(step3)
        const step4 = await bakeIt();
        console.log(step4);
    }catch{
    console.log("FINISHED BAKING THE CHOCOLATE CAKE");
    }
    

}

// makechocolate()
// console.log("____________This gets executes first...")

makechocolate().then(()=>{
    console.log("____________This gets executes last...")
    console.log("------------How was the taste . Give feedback ..")
})

// ----------------
//asycn can return function but it would behave like promise

// async function bakeCake() {
//     return "Cake is ready!";
// }

// this behaves like

////return Promise.resolve("Cake is ready!");