const carrito = [];

// Definir producto

const producto = {
    nombre: 'Monitor de 32"',
    precio: 400
}

const producto2 = { 
    nombre: 'Celular',
    precio: 1000
}

carrito.push(producto); // Añade el objeto producto a el array carrito 
carrito.push(producto2);


// Para agregar un nuevo objeto al inicio de arreglo 

const producto3 = { 
    nombre: 'Teclado',
    precio: 50
}

const producto4 = { 
    nombre: 'Teclado2',
    precio: 60
}

carrito.push(producto4);

carrito.unshift(producto3);


// Eliminar ultimo elemento del arreglo 

//carrito.pop();


// eliminar del inicio del array

//carrito.shift();

console.table(carrito);

carrito.splice(0, 2);

console.table(carrito);







