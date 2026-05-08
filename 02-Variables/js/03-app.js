const producto = 'Tablet';
producto = 'Monitor'; // No se puede reasignar un valor a una constante   
console.log(producto);

const precio; 
console.log(precio);// SyntaxError: Missing initializer in const declaration
const precio = 20.00;     // se le debe agregar siempre un valor a una constante
console.log(precio);              