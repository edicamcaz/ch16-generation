
let tiempo = new Date();
console.log(tiempo);
console.log(math);

let obj_literal = {
    nombre: 'Juan',
    edad: 35
}



let obj_constructor = new Object();
obj_constructor.nombre = 'Dora';
obj_constructor.edad = 23;
console.log(obj_literal);
console.log(obj_constructor);

obj_literal['nombre'];
let llave = 'nombre';
console.log ('esto es con llave ' + obj_literal[llave]);


//tipo cadena
let cadena = 'esto es una cadena';
let cadena_obj = new String('esto es otra cadena obj')
console.log(cadena);
console.log(cadena_obj);

/* tipo numerico*/
let numero = 13;
let numero_objeto = new Number(13.13);
console.log(numero);
console.log(numero_obj);

let lista = ['2', '3', '5', '7'];
let lista_obj = new Array('1', '4', '6', '8', '9');

console.log(lista);
console.log(lista_obj);



