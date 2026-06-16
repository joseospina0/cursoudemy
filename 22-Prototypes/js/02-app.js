// 1. Definimos la plantilla (Función Constructora) con el ID incluido
function Cliente(nombre, saldo){
    this.id = Date.now() + Math.random(); // ID único (milisegundos + un toque aleatorio por si se crean muy rápido)
    this.nombre = nombre;
    this.saldo = saldo;
}

function Empresa(nombre, saldo, categoria){
    this.id = Date.now() + Math.random(); // ID único (milisegundos + un toque aleatorio por si se crean muy rápido)
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria
}

// 2. Creamos los clientes usando el molde
const juan = new Cliente('Juan', 600);
const pedro = new Cliente('Pedro', 300);
const maria = new Cliente('Maria', 800);

// 3. Los mostramos en la consola
console.log(juan);
console.log(pedro);
console.log(maria);

function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoria} = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenecea  la categoría ${categoria}`
}

const joma = new Empresa('joma', 3000, 'Electrodomesticos');
console.log(formatearEmpresa(joma));
