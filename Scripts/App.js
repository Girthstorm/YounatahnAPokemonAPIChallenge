let pokeName = document.getElementById("pokeName");
let favBtn = document.getElementById("favBtn");
let pokeNum = document.getElementById("pokeNum");
let pokeTypes = document.getElementById("pokeTypes");
let pokeImg = document.getElementById("pokeImg");
let pokeId = "";
let searchBar = document.getElementById("searchBar");

let pokeSearch = "bulbasaur";

const getPoke = async (pokeSearch) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
    const data = await promise.json();
    console.log(data);
    populateData(data)
}
getPoke(pokeSearch)

// digimonInput.addEventListener('keydown', async (event)=>{
//     if(event.key === "Enter"){
//         digimon = await digimonApi(event.target.value)
//         console.log(digimon)
//         digimonImg.src = digimon[0].img;
//         digimonName.textContent = digimon[0].name;
//         digimonStatus.textContent = digimon[0].level;
//     }
// })


searchBar.addEventListener('keydown', async(event)=> {
    if(event.key === "Enter"){
        getPoke(searchBar.value.toLowerCase());
    }
    
} )

const populateData = async data =>{
    pokeName.textContent = titleIt(data.name);
    pokeNum.textContent = '#' + String(data.id).padStart(3, '0');
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    pokeId = data.id
}


//Favorite button
let isFav = false

favBtn.addEventListener('click', ()=>{
    if(!isFav){
        favBtn.src = "./Assets/favorited.png"
        isFav = true
    } else {
        favBtn.src = "./Assets/Vector.png"
        isFav = false
    }
})
let isShiny = true
//Switch To Shiny
pokeImg.addEventListener('click', () => {
    
    if(isShiny){
        pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeId}.png`
        isShiny = false
        
    } else {
        pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
        isShiny = true
        
    }
})


function titleIt(word, split = '-', joiner = ' ') {
    return word.split(split)
                .map(word => word[0].toUpperCase() + word.slice(1))
                .join(joiner);
}