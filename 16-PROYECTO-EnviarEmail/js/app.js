document.addEventListener('DOMContentLoaded' , function (){

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#botones button[type="submit"]');
    const btnReset = document.querySelector('#botones button[type="reset"]');
    
    const inputs = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        //Tenemos que reiniciar no solo el formulario sino tambien el arreglo
        inputs.email = '';
        inputs.asunto = '';
        inputs.mensaje = '';

        formulario.reset();
        comprobarInputs();
    });

    function validar(e) { 
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            inputs[e.target.name] = '';
            comprobarInputs();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta(`El email no es valido`, e.target.parentElement);
            inputs[e.target.name] = '';
            comprobarInputs();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // Toma el name de el input y agrega el valor a la propiedad del objeto
        // Como las propiedades del objeto se llaman igual q los names de los inputs
        // toma inputs[e.target.name] como asignar a las propiedades del objeto
        // si los names de los imputs o las variables del objeto fuesen diferentes no funcionaria 

        // tampoco se puede usar el nombre de las propiedades del objeto ya que eso asignaria cualquier valor
        //a esa variable

        inputs[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarInputs();

    }

    function mostrarAlerta(mensaje, referencia){
        // Validar que ya existe la alerta
        limpiarAlerta(referencia)

        // Crear alerta 
        const error = document.createElement('p');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center',);
        
        // Inserta la alerta en el div padre al final
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
    const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
}
}

    function validarEmail(email){
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;

    }

    function comprobarInputs(){
        if(!Object.values(inputs).includes('')){
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
            return;
        }
        btnSubmit.classList.add('opacity-50');
        btnSubmit.disabled = true;
        
    }

}
)




