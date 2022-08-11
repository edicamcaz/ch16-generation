//Arreglos
//Coleccion de elementos
// cada posicion se conoce como indice y comienza a partir de 0

let arr = [1,2,[true],3,4];
console.log(arr);

// propiedades-describen
//metodos- acciones que puede realizar 


console.log(arr[2][0]);
arr[4] = 190;
arr[4] = "hola"
console.log(arr);

//metodos arreglos
const arreglos = ["adios"];

//push
arreglo.push(2);
arreglos.push(false);
let num = 500;
arreglo.push(num);
console.log(arreglo);


//unshift
arreglo.unshift("A")
arreglo.unshift("B")
console.log(arreglo);

console.log(typeof(arreglo[4]));

//metodo para quitar elementos
//pop()\
//quita un elemento del final del arreglo

let dato1 = arreglo.pop();
console.log(dato1);
console.log(arreglo);

//unshift()
//quitar un elemento del inicio del arreglo
let dato2 = arreglo.shift();

console.log(dato2);
console.log(arreglo);

//splicer()
//quita una parte
arreglo.splice( 1, 1, "parangaricutirimicuaro");
//splice( posicion de inicio, cantidad elementos a afectar, elementos que queremos insertar)
console.log(arreglo);

//modifican el arreglo original

//metodos que no modifican el arreglo original
//hacen una copia, modifican esa copia

//slice()
//cortar partes de un arreglo
let dato3 = arreglo.slice(0, 2);

// 1ra posicion a partir de la cual va a cortar 2da posicion 
console.log(dato3);
console.log(arreglo);

