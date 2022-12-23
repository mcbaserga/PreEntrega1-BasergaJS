// // CONDICIONAL

// const compraDescuento = prompt("¿Cuántos productos deseas comprar? Con tu compra de 3 cafés o más recibirás un código de 30% de descuento para la próxima compra")

// if (compraDescuento >= 3){
//     alert("¡Gracias por comprar! El código de descuento para la próxima compra es QUIEROMASCAFE")
// } else if (compraDescuento < 3){
//     alert("¡Gracias por comprar!")
// }




// CICLO cantidad de veces que aparece un msj (el ciclo se corta con break, continue saltea la ejecución)

// for (let i = 0; i <=5; i++){
//     alert('Ciclo numero: ' + i)
// }


// for (let i = 0; i <=2; i++){
//     const numero = prompt("Ingrese un número")
//     alert(numero)
// }


for (let i = 1; i <=5; i++){
    alert('Ciclo numero: ' + i)
    if(i===3){
        break
    }
}


// FUNCIONES