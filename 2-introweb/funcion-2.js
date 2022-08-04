
function miFuncion(a, b) {
    return (a + b);
}
let resultado = miFuncion(3, 6);
console.log('El resultado es: ' + resultado)

/* ******** funcion espresion o anonima *********** */

let suma = function (a, b) { return (a + b) };

resultado = suma (2, 3);

let caracteres = 'La suma es : '

console.log(caracteres + resultado);

/* hacer aqui el ejercicio de la suma resta divison y multi y hacer lo de las carpetas*/ 


(function (a, b){
    console.log('El resultado de Self Invoking es: ' + (a + b));
})(3, 4);
