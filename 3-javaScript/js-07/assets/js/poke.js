/* URL a consumir */

const urlPokemon ='https://pokeapi.co/api/v2/pokemon/pikachu'

/* elementos del DOM */

/* funciones  */
async function obtenerPokemon(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    
    /*console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other['official-artwork'].front_default);*/


    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        id: datos.id
        tipos: datos.types,
        imagen: datos.sprites.other['official-artwork'].front_default
    }
    console.log(pokemon.imagen);
}

obtenerPokemon(urlPokemon)