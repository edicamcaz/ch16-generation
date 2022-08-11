
const saludo = "Hola mundo :)"
const datos = [{
        nombre: "Jonathan",
        apellido: "vazquez"},
       {
        nombre: "Jonathan",
        apellido: "vazquez"},
        {
        nombre: "Jonathan",
         apellido: "vazquez"}
]

//Funcion para simular una peticion

function obtenerDatos (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            if(false){

                resolve(datos);

            } else{

                reject ("No se pudo obtener datos");

            }

        }, 2000)
    })
}

obtenerDatos().then( (nothing) => {
    console.log(nothing);
}).catch ((error) => {
    console.log('Existe un error en la peticion 1');
    console.log(error);
})

//Forma 2 - Funciones asincronas - await async

async function functionAsincrona (){

    try{
        const datos = await obtenerDatos()
        console.log(datos);
    }catch(error){
        console.log(error);
    
    }
 
}
functionAsincrona()

