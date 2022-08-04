/* control de flujo */
/* condicionales */
/* If */

let condicion = 'B';

if(condicion === 10){ // si
/* codigo que se hace si se cumple la condicion */
console.log('Entro en la condicion A');

} else if (condicion === 'Hola'){
/* codigo que se hace si se cumple la condicion B */ 
console.log('Entro en la condicion B');

} else if (condicion === false) {
/* codigo que se hace si se cumple la condicion C */ 
console.log('Entro la condicion C');

} else {
    /* codigo que se hace si no se cumple alguna de las condiciones anteriores condicion por defecto */
console.log('No cumple ninguna');
} 

function dividir (a, b) {
    console.log(a/b);
    if (b=== 0){
        console.log('no se puede realizar la operacion')
    }
    else {
        console.log(a/b)
    }

}
dividir(10,2)

/* Switch */ 

// let edad = 19;
 /* un == o === regresa un true si la condicion se cumple */

 // console.log(19 == 20) // true
 // console.log(24 == 24) // false

 /* switch(15){

    case true :
    console.log('Buenos dias');
    console.log('Espero que te encuentres bien');
    break;

    case false:
    console.log('Nos vemos')
    break 
     
    case 20 :
        console.log('Te mando un saludo')
        break

    case 15 :
        console.log('Caso false');
        break
        
    default :   //por defecto
    console.log('No entendi tu mensaje');

} */

let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }
    
























