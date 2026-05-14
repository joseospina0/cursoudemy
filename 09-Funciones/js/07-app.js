iniciarApp();

function iniciarApp(){
    console.log('Iniciando app...')
    cargandodata();
}

function cargandodata(){
    console.log('Sincronizando Datos')
    validandoUsers();
}

function validandoUsers(){
    console.log('usuarios validades correctamente ')
    corecto();
}

function corecto(){
    console.log('Bienvenido :D!')
}

// De esta manera las funciones se pueden comunicar entre otras (hoisting)