const carrito = [
    {nombre: "Monitor", precio: 150},
    {nombre: "Tablet", precio: 400},
    {nombre: "Celular", precio: 500},
    {nombre: "Teclado", precio: 80},
    {nombre: "Mouse", precio: 100},
    {nombre: "Monitor2", precio: 150}
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} tiene un precio de: ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} tiene un precio de: ${producto.precio}`)
})