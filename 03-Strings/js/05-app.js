const producto = "Monitor de 20 pulgadas"; 
console.log(producto.replace("pulgadas", '"')); // Reemplaza la palabra "pulgadas" por comillas dobles
console.log(producto.replace("Monitor", "Monitor Curvo"));

console.log(producto.slice(0, 10)); // Extrae una parte de la cadena de texto desde la posición 0 hasta la posición 10
console.log(producto.slice(8)); // Extrae una parte de la cadena de texto desde la posición 8 hasta el final de la cadena de texto  
console.log(producto.slice(2, 1)); // Si el numero de inicio es mayor que el del final no imprimira nada.

// A diferencia de slice, substring no acepta números negativos
// si el numero de inicio es mayor que el del final, substring los intercambia.
console.log(producto.substring(0, 10)); // Extrae una parte de la cadena de texto desde la posición 0 hasta la posición 10
console.log(producto.substring(14, 0));

