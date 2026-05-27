const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', e => {
    if(e.target.value === ''){
        console.log("eres tonto' q te pasa?");
    }
});

// eventos del teclado, nota: el blur es cuando se sale del recuadro donde es estaba escribiendo 