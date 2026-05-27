const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault(true);

    console.log('Bucando...');

    console.log(e.target.action);
});

// evento para formulario 