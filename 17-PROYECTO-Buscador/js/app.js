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
    mostrarAutos(autos);

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
    filtro.year = parseInt(e.target.value);
    filtrarAuto(); 
    
})

minimo.addEventListener('change', (e)=>{
    filtro.minimo = e.target.value;
    filtrarAuto(); 
})

maximo.addEventListener('change', (e)=>{
    filtro.maximo = e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change', (e)=>{
    filtro.puertas = parseInt(e.target.value);
    filtrarAuto();
})

transmision.addEventListener('change', (e)=>{
    filtro.transmision = e.target.value;
    filtrarAuto();
})

color.addEventListener('change', (e=>{
    filtro.color = e.target.value; 
    filtrarAuto();
}))

/* año.addEventListener('click', filtrarAño); */

function mostrarAutos(autos){

    limpiarHTML();


    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
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
    const resultadoFiltrado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(
        filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    if( resultadoFiltrado.length ){
        mostrarAutos(resultadoFiltrado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = "No hay unidades disponibles";
    resultado.appendChild(noResultado)
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

function filtrarMaximo(auto){
    const {maximo} = filtro;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
    
    console.log(filtro);
}

function filtrarPuertas(auto){
    const {puertas} = filtro;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
    
    console.log(filtro);
}

function filtrarTransmision(autos){
    const {transmision} = filtro;
    if(transmision){
        return autos.transmision === transmision;
    }
    return autos;

    console.log(filtro);
}

function filtrarColor(autos){
    const {color} = filtro;
    if(color){
        return autos.color === color;
    }
    return autos;

    console.log(filtro);
}
