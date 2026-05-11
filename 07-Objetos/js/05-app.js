const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300, 
    disponible: true,
    information: {
        medidas: {

        },
        fabricacion: {
            pais: "China"
        }
    },
    marca:{
        nacional: "Mabe",
        internacional: "HP"
    } 
}
console.log(producto);
console.log(producto.information);
console.log(producto.information.peso);

console.log(producto.information.fabricacion.pais);
