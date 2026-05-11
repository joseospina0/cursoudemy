const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
} 


// agregar nuevas propiedades a un objeto

producto.imagen = "imagen.jpg";
delete producto.disponible; // Elimina la propiedad disponible del objeto producto

console.log(producto);


