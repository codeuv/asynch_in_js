//fetch(URL and request type)
//GET,POST
//BY DEFAULT it is GET
//PUT , POST and DELETE are others
let a = fetch("https://dummyjson.com/products")
.then((response)=>{ console.log(response)
        return response.json();
})
.then(data =>{console.log(data[0])});


let sample = fetch("https://dummyjson.com/products/add",{
    method : 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify({
        description: 'HUBANS iphone',
            category: 'electronics',
            price: 120.49
    })
}).then(response => response.json())
.then(data=>console.log(data))
.catch(error => console.log(error))
