let pokeName = document.getElementById("pokeName");
let favBtn = document.getElementById("favBtn");
let pokeNum = document.getElementById("pokeNum");
let pokeTypes = document.getElementById("pokeTypes");
let pokeImg = document.getElementById("pokeImg");
let pokeId = "";
let searchBar = document.getElementById("searchBar");
let btn = document.getElementById("btn");
let evoPath = document.getElementById("evoPath");
let loc = document.getElementById("loc")
let abilities = document.getElementById("abilities");
let moves = document.getElementById("moves");
let pokeSearch = "bulbasaur";
let evoData, evoPaths;

const getPoke = async (pokeSearch) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`)
    const data = await promise.json();
    console.log(data);
    populateData(data);
    clearType();
    typeing(data.types.map(data => data.type.name));
    let id = data.order;
    fetchEvolutionChain(pokeSearch);
    encounter(data.id)
}
getPoke(pokeSearch)

const encounter = async (id) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
    const data = await promise.json();
    if (data.length > 0){
        loc.innerText =  data[0].location_area.name;;
    } else {
        loc.innerText = "No encounter locations found for this Pokémon."
    }
}




//Not getting right evo link
const fetchEvolutionChain = async (pokeSearch) => {
    //use pokemon-species api
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeSearch}`)
    const data = await promise.json()
    console.log(data)
    const evoChainUrl = data.evolution_chain.url;
    console.log(evoChainUrl)
    const promise2 = await fetch(evoChainUrl);
    const data2 = await promise2.json();
    let currentPoke = data2.chain;
    const evos = [];
    while (currentPoke) {
        evos.push(currentPoke.species.name);
        if (currentPoke.evolves_to.length > 0) {
            currentPoke = currentPoke.evolves_to[0];
        } else {
            currentPoke = null;
        }
    }
    evos.forEach(name => {
        const finishedEvo = document.createElement('p');
        finishedEvo.textContent = titleIt(name);
        evoPath.appendChild(finishedEvo);
    });
}


searchBar.addEventListener('keydown', async(event)=> {
    if(event.key === "Enter"){
        await getPoke(searchBar.value.toLowerCase());
    }
    
} )

const populateData = async data =>{
    pokeName.textContent = titleIt(data.name);
    pokeNum.textContent = '#' + String(data.id).padStart(3, '0');
    pokeImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
    pokeId = data.id
    pokeImg.alt = titleIt(data.name)
    
    loc.innerText = "";
    abilities.innerText = "";
    moves.innerText = "";
    


}

const getEvoPath = () => {
    if(evoData == null){
        let evo = {};

    }
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
    evoPath.innerHTML = ""
}


const typeing = type => {
    //COuld have dont it to where it add the image and the src is interpolated like this <img src="./Assets/${Bug}.png" class="max-w-[45%]" alt="Bug Type
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


