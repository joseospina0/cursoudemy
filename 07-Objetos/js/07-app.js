const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
} 

// las propiedades dentro de un objeto si se pueden modificar,
//  pero no se puede reasignar el objeto

producto.disponible = false;
producto.precio = 400;

console.log(producto);

console.log(producto.precio);   

