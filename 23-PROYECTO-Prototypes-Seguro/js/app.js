// Constructores 

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realiza la cotizacion 
Seguro.prototype.cotizarSeguro = function(){
/*  1= Americano 1,15 
    2= Asiatico  1.05
    3= Europeo 1.35 */

    let precio;

    const base = 2000

    // Vaalidar el incremento segun el modelo 
    switch(this.marca){
        case '1':
            precio = base * 1.15;
            break;
        case '2':
            precio = base * 1.05;
            break;

        case '3':
            precio = base * 1.35;
            break;

        default:
            break;
    }

    // Leer el año 
    const diferencia = new Date().getFullYear() - parseInt(this.year);

    // Cada año disminuir 3%
    precio -= ((diferencia * 3) * precio) / 100;

    console.log(precio)

}

function UI(){}

// Llena las opciones de los años

UI.prototype.llenarOpciones = () =>{ 
    const max = new Date().getFullYear(),
        min = max - 20;

        const selectYear = document.querySelector('#year');

        for(let i = max; i > min; i--){
            const opcion = document.createElement('option');
            opcion.value = i;
            opcion.textContent = i;
            selectYear.appendChild(opcion);
        }
}

// mostrar alertas en pantalla 
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    // 1. Comprobar si ya existe una alerta en pantalla para no duplicarla
    const alertaPrevia = document.querySelector('.mensaje');
    if (alertaPrevia) {
        return; // Si existe, salimos de la función y no creamos otra
    }

    // 2. Si no existe, creamos la nueva alerta
    const div = document.createElement('div');
    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;

    if (tipo === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }
    
    // Mostrar alerta 
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    // 3. Quitar la alerta después de 3 segundos
    setTimeout(() => {
        div.remove();
    }, 1500);
}


// Instanciar UI 
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
} )

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    
    // Leer la informacion de ma rca 
    const marca = document.querySelector('#marca').value;
    const year = document.querySelector('#year').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;


    if(!marca || !year || !tipo){
        ui.mostrarMensaje('Hay campos vacíos, por favor intente de nuevo', 'error');
        return;
    }

    ui.mostrarMensaje('Cargando...', 'correcto');

    // Instanciar el seguro
    const seguro = new Seguro(marca, year, tipo)

    seguro.cotizarSeguro();
    // Usar el prototype que cotizara...
}

