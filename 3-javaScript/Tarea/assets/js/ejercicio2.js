
function piramide (pisos){
    for (let x = 0; x < pisos; x++){
        let patern = ''
        for (let i = 0; i < x; i++){
            patern = patern + ' ' + '*'
        }
        console.log(patern)
    }
}
piramide(5)