const getAllProducts = async () => {
    try{
        const repsonse = await fetch("https://dummyjson.com/products");
        const data = await repsonse.json()
        return data;
    }catch{
        console.log("COULD NOT LOAD THE DATA")
    }
    
}

getAllProducts().then(data=>console.log(data.products[29]))

