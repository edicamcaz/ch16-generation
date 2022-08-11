//consola.log(documento.URL);

//obtenerElementoPorId()

console.log(document.getElementById('parrafo1'));

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1.textContent);

parrafo1.textContent = "Hola desde el párrafo 1";

console.log(parrafo1.textContent);

console.log(parrafo1.estilo);

parrafo1.style.color = 'rojo';
parrafo1.style.backgroundColor = "amarillo";


//selector de consulta()
//etiqueta = p
//clase = .parrafo
//id = #parafo1


const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

//\n -- inserta un salto de linea === <br>
//\t


//querySelectorAll() // lista de nodos - nodeList

const parrafos = document.querySelectorAll('p');
console.log(parrafos[2]);

parrafos[2].style.fontSize = "2rem";

//css - tamaño de fuente
//js - tamaño de fuente - minúscula camello


//Modificar los atributos de html
const enlace = document.getElementById('enlace');
console.log(enlace.href);

enlace.href = 'https://www.youtube.com/';
enlace.objetivo = "_blank";
enlace.textContent='Enlace de Youtube';

/* Reemplazar contenido */

const parrafo4 = document.getElementById('parrafo4');

console.log(parrafo4.nombreNodo);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML);//muestra el html que hay en el interior del elemento
console.log(parrafo4.outerHTML);//muestra el contenido html, incluyendo al elemento


//parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>'; reemplaza el elemento completo

//parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>'; reemplaza el contenido del elemento

//parrafo4.outerHTML = '<div class="elemento">Este es un div</div>';


//Js permite modificar las clases css
//utilizando estilo

console.log(parrafo4.classList.contains("elemento"));


const cambiarColor = () => {
      parrafo4.classList.add('elemento');
}

cambiarColor();
