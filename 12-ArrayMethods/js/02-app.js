const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const mes = meses.findIndex( mes => mes === "Junio");
console.log(mes);

/* meses.forEach( (mes, i) => {
    if(mes === "Junio"){
        console.log(i);
    }
}) */

const index2 = carrito.findIndex( producto => producto.nombre === "Teclado");
console.log(index2);

/* 
carrito.forEach( (producto, i) => {
    if(producto.nombre === "Teclado"){
        console.log(i);
    }
}) */

