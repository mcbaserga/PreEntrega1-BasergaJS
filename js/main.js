function pedirMail(){
    const mail = prompt("Ingresá tu mail para conectarte a tu cuenta")
    alert("El mail ingresado es " + mail)
} pedirMail()

const productos = parseInt(prompt("¿Cuántos productos querés comprar? El precio por paquete de 250 gr es de $1000. Con tu compra de 3 cafés o más recibirás un código de 30% de descuento para tu próxima compra"));
if (productos >= 3){
    alert("¡Gracias por comprar! El código de descuento para la próxima compra es QUIEROMASCAFE");
} else if (productos < 3){
    alert("¡Gracias por comprar!");
}

let listaCafes = " "
let cafeIngresado = prompt("Ingrese los cafés en grano que desea. En stock: Colombia, Perú, Etiopía, Nicaragua, Brasil. Para finalizar ingrese OK");

while(cafeIngresado !== "OK"){
    listaCafes = listaCafes + '\n' + cafeIngresado;
    cafeIngresado = prompt("Ingrese los cafés en grano que desea. En stock: Colombia, Perú, Etiopía, Nicaragua, Brasil. Para finalizar ingrese OK");
}
alert("El carrito de compra tiene: " + listaCafes);

function precio(){
    alert("El precio total es $" + productos*1000)
} precio()

function precioDescuento(){
    alert("¡Feliz Navidad! Ganaste un 10% de descuento. El total con descuento es $" + (productos*1000)*0.90)
} precioDescuento()

const opcion = prompt("Elija un número para seleccionar el método de pago: 1 (efectivo), 2 (tarjeta), 3 (QR)")
switch(opcion){
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
        prompt("No seleccionaste ningún método de pago")
}