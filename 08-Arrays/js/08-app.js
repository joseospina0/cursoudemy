const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
} 

//const nombre = producto.nombre; // creo la variable y le asigna el valor de la propiedad del objeto


const {precio, disponible } = producto; 

// destructuring con arreglos.

const numeros = [10, 20, 30, 40, 50]

//const [, , tercero] = numeros;  // es importante seguir el orden de el indice de los arreglos 
//console.log(tercero);

const [primero, segundo, tercero, ...cuarto] = numeros; // la variable cuarto toma en cuenta los demás valores que
// no han sido agregados a una variable
console.log(segundo);

console.log(primero, cuarto);
