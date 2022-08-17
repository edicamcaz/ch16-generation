let x = 10;
console.log(x.lenght);

//crear un objeto que se llame persona con los atributos nombre correo electronico y edad y llamarlos

let obj_persona = {
    nombre: 'Edith',
    edad: '27',
    mail: 'edicamcaz@gmail.com',
 
}

console.log(obj_persona);

let persona = {
    nombre: 'Edith',
    apellido: 'Campos',
    edad: '27',
    mail: 'edicamcaz@gmail.com',
    /* nombreCompleto: function(){
        return this.nombre + '' + this.apellido;
    } */

    idioma: 'es',
    get leng(){
        return this.idioma.toUpperCase();
    },

    Set lang (lang) {
        this.idioma = Lang.toLowerCase();
    }
}

console.log()


/* persona.tel ='5627534040'
persona.tel ='5527533040'

// for in 

console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());

for (varPropiedad in persona){
console.log(persona[varPropiedad]);
}

// let personaSstring = JSON stringfy 

 */

let x = 10;
/* console.log(x.length); */

/* ejercicio */

let persona = {
    nombre: 'Jose',
    apellido: 'Perez',
    edad: 25,
    email: 'jose@correo.com',
    /* nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido; 
    } */

        idioma: 'es',
        get leng() {
            return this.idioma.toUpperCase();
        },
        set leng (lang){
            this.idioma = lang.toLowerCase();
        }
}
/* console.log(persona.leng); */
persona.lang = 'ES';
console.log(persona.leng);
console.log(persona.idioma);

persona.tel = '555567890';
persona.te1 = '8749287349';

/* console.log(persona);
console.log(persona.nombre); */
/* console.log(persona.nombreCompleto()); */

/* let datos = new Object();
datos.nombre = 'Jose';
datos.apellido = 'Perez';
datos.edad = 25;
datos.email = 'jose@correo.com';
console.log(persona);
console.log(datos); */

/* for in */

/* for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString); */

