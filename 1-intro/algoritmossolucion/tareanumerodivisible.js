//TAREA 15/07/2022 
//Programa de divisibilidad

function divisible(numero){
    if( (numero%2===0) && (numero%4===0)){
        return true;
    }else{
        return false;
    }
}

console.log("DIVISIBILIDAD")
let numero = parseInt(prompt("Escribe el numero: "));
console.log("¿El numero " + numero + " es divisible entre 2 y 4?");
console.log("RESPUESTA: " + divisible(numero));