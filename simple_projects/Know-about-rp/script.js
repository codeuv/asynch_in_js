console.log("LOADED")

const loadJoke = async ()=>{
    try{
        const JokeAPI = await fetch('https://api.chucknorris.io/jokes/random',{
            headers:{
                Accept:"application/json"
            }
        });
        const JokeAPIResponse = await JokeAPI.json();
        console.log(JokeAPIResponse);
        return JokeAPIResponse;
    }catch{
       console.log("ERROR") 
    }
}


loadJoke();

const para = document.querySelector('#joke-para')

const loadJokeToFE = ()=>{
    loadJoke().then((joke)=>{
        if(!joke){
            para.textContent = "KNOW MORE ABOUT KLE DON RAHUL"
            return;
        }
        let joke_text = joke.value ;
        joke_text = joke_text.replace(/Chuck/g, "Rahul")
        joke_text = joke_text.replace(/Norris/g, "Pawar")
        para.textContent = joke_text;
    })
}

const button = document.querySelector('#loadJokeBtn')

button.addEventListener('click',loadJokeToFE)