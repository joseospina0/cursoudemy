// Constructores 

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
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

// Instanciar UI 
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
} )
