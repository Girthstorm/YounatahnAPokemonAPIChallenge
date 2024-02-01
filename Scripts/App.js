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
    populateData(data);
    await clearType();
    await typeing(data.types.map(data => data.type.name));
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

const clearType = () => {
    pokeTypes.innerHTML = ""
}


const typeing = type => {
    
    console.log(type);
    type.forEach(element => {
        
    



    switch (element) {
        case 'bug':
            pokeTypes.innerHTML += '<img src="./Assets/Bug.png" class="max-w-[45%]" alt="Bug Type">';
            break;
        case 'dark':
            pokeTypes.innerHTML += '<img src="./Assets/Dark.png" class="max-w-[45%]" alt="Dark Type">';
            break;
        case 'dragon':
            pokeTypes.innerHTML += '<img src="./Assets/Dragon.png" class="max-w-[45%]" alt="Dragon Type">';
            break;
        case 'electric':
            pokeTypes.innerHTML += '<img src="./Assets/Electric.png" class="max-w-[45%]" alt="Electric Type">';
            break;
        case 'fairy':
            pokeTypes.innerHTML += '<img src="./Assets/Fairy.png" class="max-w-[45%]" alt="Fairy Type">';
            break;
        case 'fighting':
            pokeTypes.innerHTML += '<img src="./Assets/Fighting.png" class="max-w-[45%]" alt="Fighting Type">';
            break;
        case 'fire':
            pokeTypes.innerHTML += '<img src="./Assets/Fire.png" class="max-w-[45%]" alt="Fire Type">';
            break;
        case 'flying':
            pokeTypes.innerHTML += '<img src="./Assets/Flying.png" class="max-w-[45%]" alt="Flying Type">';
            break;
        case 'ghost':
            pokeTypes.innerHTML += '<img src="./Assets/Ghost.png" class="max-w-[45%]" alt="Ghost Type">';
            break;
        case 'grass':
            pokeTypes.innerHTML += '<img src="./Assets/Grass.png" class="max-w-[45%]" alt="Grass Type">';
            break;
        case 'ground':
            pokeTypes.innerHTML += '<img src="./Assets/Ground.png" class="max-w-[45%]" alt="Ground Type">';
            break;
        case 'ice':
            pokeTypes.innerHTML += '<img src="./Assets/Ice.png" class="max-w-[45%]" alt="Ice Type">';
            break;
        case 'normal':
            pokeTypes.innerHTML += '<img src="./Assets/Normal.png" class="max-w-[45%]" alt="Normal Type">';
            break;
        case 'poison':
            pokeTypes.innerHTML += '<img src="./Assets/Poison.png" class="max-w-[45%]" alt="Poison Type">';
            break;
        case 'psychic':
            pokeTypes.innerHTML += '<img src="./Assets/Psychic.png" class="max-w-[45%]" alt="Psychic Type">';
            break;
        case 'rock':
            pokeTypes.innerHTML += '<img src="./Assets/Rock.png" class="max-w-[45%]" alt="Rock Type">';
            break;
        case 'steel':
            pokeTypes.innerHTML += '<img src="./Assets/Steel.png" class="max-w-[45%]" alt="Steel Type">';
            break;
        case 'water':
            pokeTypes.innerHTML += '<img src="./Assets/Water.png" class="max-w-[45%]" alt="Water Type">';
            break;
        default:
            pokeTypes.innerHTML = 'Type not recognized.';
            break;
    }
});
}


