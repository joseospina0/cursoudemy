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
    mostrarAutos(autos);
})

year.addEventListener('change', (e) => {
    filtro.year = e.target.value;
    filtrarAuto(); 
    mostrarAutos(autos);
    
})

minimo.addEventListener('change', (e)=>{
    filtro.minimo = e.target.value;
    filtrarAuto(); 
})

maximo.addEventListener('change', (e)=>{
    filtro.maximo = e.target.value;
})

puertas.addEventListener('change', (e)=>{
    filtro.puertas = parseInt(e.target.value);
})

transmision.addEventListener('change', (e)=>{
    filtro.transmision = e.target.value;
})

color.addEventListener('change', (e=>{
    filtro.color = e.target.value; 
}))

/* año.addEventListener('click', filtrarAño); */

function mostrarAutos(autos){

    limpiarHTML();


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

// limpiar html antes de cada consulta

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}




function filtrarAuto(){
    const resultadoFiltrado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo)
    console.log(resultadoFiltrado);
}

function filtrarMarca(auto){
    const {marca} = filtro;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
    
    console.log(filtro);
}

function filtrarYear(auto){
    const {year} = filtro;
    if(year){
        return auto.year === year;
    }
    return auto;
    
    console.log(filtro);
}

function filtrarMinimo(auto){
    const {minimo} = filtro;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
    
    console.log(filtro);
}


