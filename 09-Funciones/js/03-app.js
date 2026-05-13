const nombre = prompt("Cree su usuario");
const password = prompt("Cree su contraseña");


function validacion(){
    const nombre2 =prompt("Ingrese su usuario");
    prompt("Ingrese su contraseña");
    if (nombre != nombre){
        alert("Usuario incorrecto");
    } else if(password != password){
        alert("Contraseña incorrecta")
    }else if ((nombre = nombre) ){
        console.log("Has ingresado exitosamente");
    }
    
}

validacion();


