// sort ()
//ordenar los elementos de un arreglo

const arr = ["X", "A", "H", "a", "W", "b"];

arr.sort();

console.log(arr);

/********** *********/

const arr3 = [5, 1231, 567, 1, 80];

arr3.sort((a, b => a - b )); // ordena numeros de menor a mayor


arr3.sort((a, b => b - a )); // ordena numeros de  mayor a menor

console.log(arr3)


/*********** **********/ 


// funcion declarada
//hoisting
//un proceso de reacomodo automatico del codigo
function sumar (a, b){
    return a + b;
}

console.log(5, 7);

let a = 2;
console.log(a);

//funcion expresada
//hoisting no funciona

const multiplicar = function(a, b){
    return a * b
}

console.log(multiplicar(3,5));

//Funciones flecha
//la flecha del mayor igual es necesaria para describir mi funcion internamente esos valores lit apuntan a la siguiente operacion es decir el => es un puntero se usa para una sola operaci[on por eso no se usan llaves o corchetes]

const dividir = (a,b) => a / b;
 console.log(dividir(10, 2));

 const arrNumeros = [1,4,6,8,10,  20,   30];

 for (let i=0; i< arrNumeros.length; i++){
     arrNumeros[i] = arrNumeros[i] * 2
 } 
 arrNumeros.forEach((elemento, index, arr) => {
     console.log(elemento *= 2)
 } )

 