function Cliente(nombre, saldo){
    this.id = Date.now() + Math.random(); // ID único (milisegundos + un toque aleatorio por si se crean muy rápido)
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 5000){
        tipo = 'Platinum';
    }else if(this.saldo > 2500){
        tipo = 'Gold'
    }else{
        tipo = 'Silver'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retirarSaldo = function(cantidad){
    this.saldo -= cantidad  
}

// Dar prototypes de un objeto a otro

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Persona;

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono
}

const juan = new Persona('juan', 1000, 351516984)

console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefeno = function(){
    return`El telefono es ${this.telefono}`
}

console.log(juan.mostrarTelefeno());

console.log(juan);