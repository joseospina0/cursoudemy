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

const { information: { fabricacion: { pais } } } = producto;

console.log(pais);

console.log(producto);

const nacional = producto.marca.nacional;

console.log(nacional);

console.log(producto.information.fabricacion.pais);
