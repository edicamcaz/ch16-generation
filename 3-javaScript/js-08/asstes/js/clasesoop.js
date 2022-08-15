class Persona {
    
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
get nombre(){
    return this.nombre;
}
set nombre(nombre){
this.nombre =nombre;
}

}

let Persona1 = new Persona('Jose', 'Perez');
console.log(Persona1);

Persona1.nombre = 'Hugo Sanchez';
console.log(Persona1.nombre);

let Persona2 = new Persona('Ana', 'Cruz')
console.log(Persona2);

