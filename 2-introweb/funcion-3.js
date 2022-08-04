/*** Funciones como Objetos **** */
function miFuncion (a = 6, b = 7){
    let res = 0; // propiedad o inicio de la variable estamos definiendo la variable como parametro y donde empieza podria empezar sin declarar el valor seria undefined y eso causaria problemas en el codigo problamente.
    res = (a * b);// accion o proceso
    return res;
}

console.log( typeof miFuncion);
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);