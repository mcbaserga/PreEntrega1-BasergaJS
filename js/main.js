const variedadesDeCafe = [
    {origen: "Colombia", precio: 1000, molido: "En granos", peso: 250, tostado: "medio", sabor: "chocolate", notas: "carambola, caramelo, chocolate con leche", stock: 10},
    {origen: "El Salvador", precio: 1000, molido: "En granos", peso: 250, tostado: "medio", sabor: "frutal", notas: "miel, maracuyá, melón", stock: 4},
    {origen: "Etiopía", precio: 1000, molido: "En granos", peso: 250, tostado: "medio", sabor: "frutal", notas: "quinotos, frutas de carozo, naranja", stock: 1},
    {origen: "Guatemala", precio: 1000, molido: "En granos", peso: 250, tostado: "medio", sabor: "vainilla", notas: "vainilla, almendra, melaza", stock: 5,},
    {origen: "Kenia", precio: 1000, molido: "En granos", peso: 250, tostado: "medio", sabor: "caramelo", notas: "lima, papaya, caramelo y pimienta negra", stock: 0,},
    {origen: "Nicaragua", precio: 1000, molido: "En granos", peso: 250, tostado: "medio", sabor: "chocolate", notas: "papaya, cacao en grano, licor de cereza", stock: 2}]

const productos = parseInt(prompt("¿Cuántos productos querés comprar? El precio por paquete de 250 gr es de $1000. Con tu compra de 3 cafés o más recibirás un código de 30% de descuento para tu próxima compra"));
if (productos >= 3){
    alert("¡Gracias por comprar! El código de descuento para la próxima compra es QUIEROMASCAFE");
} else if (productos < 3){
    alert("¡Gracias por comprar!");
}

alert("A continuación podrá ver las características de los diferentes cafés")

const notasDeCafes = variedadesDeCafe.map(variedadesDeCafe => {
    return alert("El café " + variedadesDeCafe.origen + " tiene un valor de $" + variedadesDeCafe.precio + ", su tostado es " + variedadesDeCafe.tostado + ", con notas sabor " + variedadesDeCafe.notas);
})

const cafesEnStock = variedadesDeCafe.filter(cafe => cafe.stock > 0);
alert("Los siguientes cafés se encuentran en stock: " + cafesEnStock.map(cafe => cafe.origen).join(', '));

let cafes;
const carrito = [];
do {
    cafes = prompt("Ingrese los cafés en grano que desea comprar. Variedades en stock: " + cafesEnStock.map(cafe => cafe.origen).join(', ') + ". Para finalizar ingrese OK");
    if (cafesEnStock.map(cafe => cafe.origen).includes(cafes) && cafes !== "OK"){
        carrito.push(cafes);
    }
    else if(cafes !== "OK"){
        alert("Esa variedad no se encuentra en stock, por favor ingresa una variedad válida.")
    }
} while (cafes !== "OK");

alert("Has agregado a tu carrito los siguientes productos: \n" + carrito.join("\n"));

function precio(){
    alert("El precio total es $" + productos*1000)
} precio()

function precioDescuento(){
    alert("¡Feliz Navidad! Ganaste un 10% de descuento. El total con descuento es $" + (productos*1000)*0.90)
} precioDescuento()

const opcionDePago = prompt("Elija un número para seleccionar el método de pago: 1 (efectivo), 2 (tarjeta), 3 (QR)")
switch(opcionDePago){
    case "1":
        alert("Elegiste efectivo como método de pago")
        break
    case "2":
        alert("Elegiste tarjeta de débito o crédito como método de pago")
        break
    case "3":
        alert("Elegiste Mercado Pago como método de pago")
        break
    default:
        alert("No seleccionaste ningún método de pago")
}