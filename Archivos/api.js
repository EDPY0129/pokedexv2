const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res1) => {
        if (res1.status != "200") {
            console.log(res1);
            pokeImage("./Archivos/missingno.png")
        }
        else {
            return res1.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;   
            pokeImage(pokeImg);
            console.log(pokeImg);

            let tipo = data.types[0].type.name; 
            document.getElementById("typee").innerHTML = tipo;

            let moves = data.moves[1].move.name; 
            document.getElementById("moves").innerHTML = moves;
            let moves2 = data.moves[2].move.name; 
            document.getElementById("moves2").innerHTML = moves2;
            let moves3 = data.moves[3].move.name; 
            document.getElementById("moves3").innerHTML = moves3;
            let moves4 = data.moves[4].move.name; 
            document.getElementById("moves4").innerHTML = moves4;
            let moves5 = data.moves[5].move.name; 
            document.getElementById("moves5").innerHTML = moves5;
            let moves6 = data.moves[6].move.name; 
            document.getElementById("moves6").innerHTML = moves6;
            let moves7 = data.moves[7].move.name; 
            document.getElementById("moves7").innerHTML = moves7;
            let moves8 = data.moves[8].move.name; 
            document.getElementById("moves8").innerHTML = moves8;
            let moves9 = data.moves[9].move.name; 
            document.getElementById("moves9").innerHTML = moves9;
            let moves10 = data.moves[10].move.name; 
            document.getElementById("moves10").innerHTML = moves10;

            let peso = data.weight; 
            document.getElementById("peso").innerHTML = peso;

            let altura = data.height; 
            document.getElementById("altura").innerHTML = altura;
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}


