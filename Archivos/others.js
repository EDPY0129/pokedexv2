const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemon =document.getElementById('pokeName')
const buttonSearch = document.getElementById('Buttonsearch')
const appNode = document.getElementById('nyid')
const appNode2 = document.getElementById('typeev')
const appNode3 = document.getElementById('Movesv')
const buttonDelete = document.getElementById('Buttondel')
 

buttonSearch.addEventListener('click', insertPokemon)
buttonSearch.addEventListener('touchstart', insertPokemon)

buttonSearch.addEventListener('click' , deletePokemons);
buttonSearch.addEventListener('touchstart' , deletePokemons);


function insertPokemon(){
    window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`)
        .then(response => {
            if(response.status=== 404){
                alert('Error, pokemon no econtrado, verfica el nombre.');
                const allItems=[]
                const result =[]
                const nombrepk =document.createElement('h2')
                nombrepk.innerText =`#??? - MissingNo`

                const container =document.createElement('div')
                container.append(nombrepk)
                allItems.push(container)
                appNode.append(...allItems)
            } else{
                return response.json()
            }
        })
        .then(responseJSON => {
            const allItems=[]
            const result =[]
            for(let pokemonInfo in responseJSON){
                result.push([pokemonInfo, responseJSON[pokemonInfo]])
            }
            console.table(result)
            const nombrepk =document.createElement('h2')
            nombrepk.innerText =`# ${result[6][1]} - ${result[10][1]}`

            const container =document.createElement('div')
            container.append(nombrepk)
            allItems.push(container)
            appNode.append(...allItems)

        })
        
}

function deletePokemons() {
    let allPokemon = appNode.childNodes;
    allPokemon = Array.from(allPokemon);
  
    allPokemon.forEach(pokemon => {
      pokemon.remove(pokemon);
    });
  }

