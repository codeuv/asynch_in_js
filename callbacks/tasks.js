function task1(callback) {
    setTimeout(() => {
        console.log("1. How to make a burger: Get the ingredients (bun, patty, veggies, cheese, sauces)");
        callback();
    }, 5500);
    
}

function task2(callback) {
    setTimeout(() => {
        console.log("2. Toast the buns on a pan or grill");
        callback();
    }, 3200);

}

function task3(callback) {
    setTimeout(() => {
        console.log("3. Cook the burger patty until well done");
        callback();
    }, 1300);

}

function task4(callback) {
    setTimeout(() => {
        console.log("4. Assemble the burger: Bottom bun -> patty -> veggies -> cheese -> sauces -> top bun");
       callback();
    }, 1200);


}

function task5(callback) {
    setTimeout(() => {
        console.log("5. Serve the burger with fries or a drink!");
        callback();
    }, 5000);

}

// Call the tasks this will not run in  order
// task1();
// task2();
// task3();
// task4();
// task5();


task1(()=>{
    task2(()=>{
        task3(() => {
            task4(()=>{
                task5(()=>{
                    console.log("FINISH")
                })
                
            })
        })
    })
})
