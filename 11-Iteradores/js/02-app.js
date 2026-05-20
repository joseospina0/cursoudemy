/* for( let i = 0; i <= 10; i++ ) {
    if(i === 5) {
        console.log('CINCO');
        continue;
    }
    console.log(`Numero: ${i}`)
} */

const carrito = [
    {nombre: "Monitor", precio: 150},
    {nombre: "Tablet", precio: 400, descuento: true},
    {nombre: "Celular", precio: 500},
    {nombre: "Teclado", precio: 80},
    {nombre: "Mouse", precio: 100},
    {nombre: "Monitor2", precio: 150}
]

for(let i = 0; i < carrito.lengtg; i++){
    if(carrito[i].descuento){
        console.log(`${carrito[i].nombre} tiene descuento`);
        continue;
    }

    console.log(carrito[i].nombre)
}
