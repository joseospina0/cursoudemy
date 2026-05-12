const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
}

// Object construction 

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio; 
    this.disponible = true;
}

const producto2 = new Producto("Monitor", 29);
console.log(producto2);

const producto3 = new Producto("Tablet", 1500);
console.log(producto3);

