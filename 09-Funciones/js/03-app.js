const nombre = prompt("Cree su usuario");
const password = prompt("Cree su contraseña");


function validacion(){
    let nombre2 =prompt("Ingrese su usuario");
    let password2 = prompt("Ingrese su contraseña");
    if (nombre != nombre2){
        alert("Usuario incorrecto");
    } else if(password != password2){
        alert("Contraseña incorrecta");
    }else if ((nombre == nombre2) && (password == password2) ){
        console.log("Has ingresado exitosamente");
    }
    
}

validacion();


