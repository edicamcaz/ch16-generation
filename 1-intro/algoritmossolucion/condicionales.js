//Condicionales
//IF

let nombre = prompt("Escribe tu nombre");

if(nombre === "Edith"){
    console.log("Holi, Edith");
}else if(nombre === "Jhona"){
    console.log("Hola Prof!");
}else if(nombre === "Raul"){
    console.log("Hola Tambien");
}else if(nombre === "Victor"){
    console.log("Hola Vic");
}else if(nombre === "Raquel"){
    console.log("Mil Gracias Por La Ayuda");
}else{
    console.log("Holi, Tu");
}

// string a numerico (parseInt)
//parseFloat


let edad = prompt("Cual es tu nombre?","Escribe tu edad");
console.log("Edad");
console.log(typeof(edad));
console.log(edad);
edad = parseInt(edad);
console.log(typeof(edad));
console.log(edad);