"use strict"; // Esto es para que el código se ejecute en modo estricto, lo que ayuda a evitar errores comunes.



const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true
} 

// El Object.seal es para sellar el objeto, es decir
// No se puede agregar ni eliminar propiedades, pero si se pueden modificar las existentes.

Object.seal(producto); 

producto.disponible = false;  
producto.precio = 400; 
//producto.imagen = "imagen.jpg"; // Esto no funcionará porque el objeto está sellado, no se pueden agregar nuevas propiedades.
//delete producto.nombre; // Esto no funcionará porque el objeto está sellado, no se pueden eliminar propiedades.

console.log(producto);

/* let x = 20;      // aunque no se uso const, let o var, javascript lo permite, pero no es recomendable.
console.log(x); 
*/
console.log(Object.isSealed(producto)); // Esto devuelve true si el objeto está sellado, en este caso devolverá true.
