const numero1 = 20;
const numero2 = "20";
const numero3 = "20.20";
const numero4 = "Uno";

// metodo para identificar tipo de dato 
console.log(typeof numero1);
console.log(Number.parseInt(numero2)); // Convierte a entero
console.log(Number.parseFloat(numero3)); // Convierte a decimal
console.log(Number.parseInt(numero4)); // No se puede convertir a número, devuelve NaN (Not a Number)

// identificar si un numero es entero 

console.log(Number.isInteger(numero2)); // Devuelve false, no es un número
