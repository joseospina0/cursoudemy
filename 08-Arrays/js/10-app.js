const carrito = [
    {nombre: "Monitor", precio: 150},
    {nombre: "Tablet", precio: 400},
    {nombre: "Celular", precio: 500},
    {nombre: "Teclado", precio: 80},
    {nombre: "Mouse", precio: 100},
    {nombre: "Monitor2", precio: 150}
]

console.log(carrito.length);

const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} tiene un precio de: ${producto.precio}`;
})


const nuevoArreglo2 = carrito.forEach( function(producto){
    return`${producto.nombre} tiene un precio de: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

