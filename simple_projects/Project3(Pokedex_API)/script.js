const getPokemon = async ()=>{
    console.log('link')
    try{
        const pokemonName = document.querySelector('.search-input-js').value ;
        const screenElement = document.querySelector('.pokemon-img-js')
        console.log(pokemonName);
        let url = "https://pokeapi.co/api/v2/" + `pokemon/${pokemonName}`
        const pokeAPIResponse = await fetch(url);
        if(!pokeAPIResponse.ok){
            alert("Enter correct pokemon and check for any spelling mistake")
            return;
        }
        // console.log(pokeAPIResponse)
        const data = await pokeAPIResponse.json();
        // console.log(data);
        const img_link = data.sprites.front_default;
        screenElement.src = img_link

    }catch{
        console.log("ERROR")
    }
}

document.querySelector('.search-btn-js').addEventListener('click', getPokemon)