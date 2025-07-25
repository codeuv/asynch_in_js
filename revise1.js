//SetTimeout and set Interval


id = setInterval(()=>{
    console.log("I WILL RUN ")
},1000)

setTimeout(()=>{
    clearInterval(id)
},5000)