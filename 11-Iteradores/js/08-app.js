const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

/* console.log(automovil.modelo);

for(let propiedad in automovil) {
    console.log(`${propiedad} ${automovil[propiedad]}`)
}  */
console.log(Object.entries(automovil));


for(let [llave, valor] of Object.entries(automovil)){
    console.log(`El ${llave} es ${valor}`);
}

// For in itera sobre objetos