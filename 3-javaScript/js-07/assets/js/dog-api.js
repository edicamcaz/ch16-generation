
/* URLs para consumir */

const urlAleatorios = "https://dog.ceo/api/breeds/image/random"

const imagenPerrito = document.getElementById('img-perrito');
console.log(imagenPerrito);

const btn = document.getElementById('btn-perrito')
console.log(btn);

btn.addEventListener('click', () => {
    console.log('boton presionado')
    obtenerPerritoAleatorio(urlAleatorios)
})


async function obtenerPerritoAleatorio(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos)
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src = datos.message
}

btn.addEventListener('click', () => {
    
    obtenerPerritoAleatorio(urlAleatorios)
})