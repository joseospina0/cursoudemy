const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
} 

const nombre = producto.nombre; // creo la variable y le asigna el valor de la propiedad del objeto


const {precio, disponible } = producto; //crea las variables y le asigna las propiedades del objeto.
console.log(nombre);
console.log(precio);