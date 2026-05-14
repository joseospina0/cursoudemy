function sumar(a, b){
    return a + b;
}
const resultado = sumar(2, 5);

console.log(resultado);

let total = 0
function agregarCarrito(precio){  // toma total y le suma precio del articulo
    return total += precio;
}

function impuesto(total){   // toma el total y le añade el 15%
    return total * 1.15;
}

agregarCarrito(300);
agregarCarrito(100);
agregarCarrito(600);
console.log(total);

const totaPagar = impuesto(total); // Le a
console.log(totaPagar);




