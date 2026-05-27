// eventos de para un scroll 
window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 690){
        console.log('El elemente ya esta visible');
    }else{
        console.log('El elemente no esta visible');
    }

    console.log(ubicacion);
});



