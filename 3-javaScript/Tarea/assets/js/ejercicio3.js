

let xValue = 100
while (xValue > 0){
    xValue = xValue - 0.5
    for (let x = 0; x < xValue; x++){
        if (xValue % 2 === 1){
            console.log(`El numero ${xValue} es impar`)
        }
    }
}
 
