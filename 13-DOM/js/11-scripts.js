const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'Cerrar';
}});


// tambien se puede hacer declarando una funcion 

/* btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo')
        this.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        btnFlotante.textContent = 'Cerrar';
}
}; */
