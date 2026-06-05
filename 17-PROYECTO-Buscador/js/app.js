const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


// Mostrar todo el catalogo 
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

// Generar filtro
const filtro = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    color: '',
    transmision: ''
    }



document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos();

    // Llena las opciones de año 
    llenarSelect();
})

// Limpiar filtro


// Event listener para los filtros
marca.addEventListener('change', (e) =>{
    filtro.marca = e.target.value;
    filtrarAuto();
})

year.addEventListener('change', (e) => {
    filtro.year = e.target.value;
    
})

minimo.addEventListener('change', (e)=>{
    filtro.minimo = e.target.value;
})

maximo.addEventListener('change', (e)=>{
    filtro.maximo = e.target.value;
})

puertas.addEventListener('change', (e)=>{
    filtro.puertas = e.target.value;
})

transmision.addEventListener('change', (e)=>{
    filtro.transmision = e.target.value;
})

color.addEventListener('change', (e=>{
    filtro.color = e.target.value; 
}))

/* año.addEventListener('click', filtrarAño); */

function mostrarAutos(){
    autos.forEach(autos =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = autos;
        const catalogo = document.createElement('p');
        catalogo.textContent = `
        ${marca} ${modelo} - ${year} -${puertas} Puertas - Transmición: ${transmision} - Precio: ${precio} -
        Color: ${color}
        `;

        resultado.appendChild(catalogo);
    })
    
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        year.appendChild(option);
    }
}

function filtrarAuto(){
    const resultadoFiltrado = autos.filter(filtrarMarca)
}

function filtrarMarca(auto){
    const {marca} = filtro;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
    
console.log(filtro);
}
