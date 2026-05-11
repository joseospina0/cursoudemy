"use strict"; // Esto es para que el código se ejecute en modo estricto, lo que ayuda a evitar errores comunes.



const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
} 

Object.freeze(producto); // Esto hace que el objeto no se pueda modificar, ni agregar nuevas propiedades.
// delete producto.precio; // Esto no funcionará porque el objeto está congelado.

producto.disponible = false;  // Esto no funcionará porque el objeto está congelado, no se pueden modificar las propiedades existentes.
producto.precio = 400; // Esto no funcionará porque el objeto está congelado, no se pueden modificar las propiedades existentes.
producto.imagen = "imagen.jpg"; // Esto no funcionará porque el objeto está congelado, no se pueden agregar nuevas propiedades.

console.log(producto);

/* let x = 20;      // aunque no se uso const, let o var, javascript lo permite, pero no es recomendable.
console.log(x); 
*/

console.log(Object.isFrozen(producto)); // Esto devuelve true si el objeto está congelado, en este caso devolverá true.
