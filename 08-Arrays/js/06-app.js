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


const producto3 = { 
    nombre: 'Teclado',
    precio: 50
}

let resultado = [];

resultado = [...carrito, producto] // es lo mismo que carrito.push(producto); 
//  copia el arreglo carrito y le agrega producto

resultado = [...resultado, producto2] // Como anterioremente resultado 
// ya habia copiado a carrito y la habiai agregado a producto
// ahora solo es necesario copiar resultado y agregarle producto 2. 

resultado = [producto3, ...resultado]
console.table(resultado);
