const nav = document.querySelector('.navegacion');

// Registrar un evento.

nav.addEventListener('mouseenter', () => {
    console.log('entrando en la navegación')
    nav.style.backgroundColor = 'white'
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación')
    nav.style.backgroundColor = 'transparent'
});

nav.addEventListener('dblclick', () => {
    console.log('para que das doble click????!!!');
})

