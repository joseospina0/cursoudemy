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



const pedro = new Cliente('Pedro', 6000)
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retirarSaldo(1000);
console.log(pedro.nombreClienteSaldo());
console.log(pedro);
