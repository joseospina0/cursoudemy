const producto = "                Monitor de 20 pulgadas";

console.log(producto);
console.log(producto.length);

// para quitar los espacios en blanco de una cadena de texto:

console.log(producto.trimStart()); // Elimina los espacios en blanco al inicio de la cadena de texto
console.log(producto.trimEnd()); // Elimina los espacios en blanco al final de la cadena de texto

// tambien se pueden concatenar mètodos.
console.log(producto.trimStart().trimEnd()); // Elimina los espacios en blanco al inicio y al final de la cadena de texto

console.log(producto.trim()); // Elimina los espacios en blanco al inicio y al final de la cadena de texto