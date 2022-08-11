/* Para declarar una funcion se debe poner
el nombre de la funcion si son mas de dos palabras 
debe ir en camelCase */

 function miSuma (a , b) {
    let resultado = (a + b);
    console.log("La suma es " + resultado);
}
miSuma (2,3);

//otra forma de declarar una funcion

function miSuma (a , b){
    console.log("La suma es " + (a + b));
}
miSuma (3,6)

function miProducto (a, b){
return (a * b);
}
console.log('el producto s ' + miProducto (4, 5));

let res;
function miResta (a, b) {
    return (a - b);
}
res = miResta(10, 4);

console.log('la resta es ' + res);


function miNombre (nombre, apellido1, apellido2) {
let nombre = 'Edith'
let apellido1 = 'Campos'
let apellido2 = 'Cazares'
}

console.log('Mi nombre es: ' + miNombre)

