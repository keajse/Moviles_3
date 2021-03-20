console.log("Bienvenidos al Restaurante Muerta Lenta")
console.log()


let subtotal = 0
let total = 0
let burguer = 0
let dogs = 0
let salchipapas = 0
let chorizos = 0
let descuento = 0
let totalPersona = 0
let propina = 0
let totalPropina = 0
let subtotalDescuento = 0
let totalBurguer = 0
let totalDogs = 0
let totalSalchipapas = 0
let totalChorizos = 0


console.log();

numPeople = prompt("Número de personas: ");

for (let x = 1; x <= numPeople; x++) {
    console.log("Nuestro menú es: ")
    console.log("1. Hamburguesa $10.000")
    console.log("2. Perros $8.000")
    console.log("3. Salchipapas $6.000")
    console.log("4. Chorizos $7.000")

    let plato = prompt("¿Qué desea ordenar?, seleccione el número de su plato: ");

    while (plato == ""|| plato != 1 || plato != 2 || plato != 3 || plato != 4) {
        console.log("Escoga una de las opciones del menú: ")
        console.log("1. Hamburguesa $10.000")
        console.log("2. Perros $8.000")
        console.log("3. Salchipapas $6.000")
        console.log("4. Chorizos $7.000")

        plato = prompt("¿Qué desea ordenar?, seleccione el número de su plato: ");

        if(plato == 1 || plato == 2 || plato == 3 || plato == 4){
            break
        }

    }

    let cant = prompt("Cantidad: ");

    if (plato == 1) {
        burguer = cant * 10000;
        totalPersona = burguer

    }
    else if (plato == 2) {
        dogs = cant * 8000;
        totalPersona = dogs
    }
    else if (plato == 3) {
        salchipapas = cant * 6000;
        totalPersona = salchipapas
    }
    else if (plato == 4) {
        chorizos = cant * 7000;
        totalPersona = chorizos
    }


    console.log(`Total de la persona ${x} es: ${totalPersona}`)

    subtotal = subtotal + totalPersona

}


console.log(`El Subtotal es: ${subtotal}`)

if (subtotal > 20000) {
    descuento = subtotal * 10 / 100
    subtotalDescuento = subtotal - descuento;

    console.log(`Por su compra mayor a $20.000 ha obtenido un descuento del 10% es decir: ${descuento}`)

}
else {
    subtotalDescuento = subtotal;
}


let rtaPropina = prompt("¿Desea incluir propina? 1. si o 2. no")
console.log(rtaPropina)

if (rtaPropina == "1") {
    propina = subtotalDescuento * 10 / 100

}

else {
    propina = subtotalDescuento * 0 / 100
    totalPropina = subtotalDescuento
}

totalPropina = subtotalDescuento + propina

console.log(`El total a pagar es: ${totalPropina}`)


