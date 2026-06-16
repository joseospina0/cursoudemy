const formulario = document.querySelector('#formulario');

const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

// eventos
eventListeners()
function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    })
}

// Funciones

function agregarTweet(e){
    e.preventDefault();
    const tweet = document.querySelector("#tweet").value;

    if(tweet === ''){
        alerta('Este campo no puede ir  vacio');
        return;
    }
    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // agregar al arreglo

    tweets = [...tweets, tweetObj];

    // Publicar

    publicar();

    // Reiniciar formulario 
    formulario.reset();

}

function alerta(error){
    limpiarHTML();

    const alerta = document.createElement('p');
    alerta.classList.add('error');
    alerta.textContent = error;

    // insertar la alerta

    const contenido = document.querySelector('#contenido');
    contenido.appendChild(alerta);

    // Elimina la alerta
    setTimeout(()=>{
        alerta.remove();
    }, 3000)
    
}


function publicar(){
    
    limpiarHTML();

    if(tweets.length > 0){
        // limpiar html
        tweets.forEach(tweet =>{
            // btn de eliminar

            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X';

            // añadir funcion para eliminar 
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');
            li.textContent = tweet.tweet
            // AGREGAR btn eliminar 
            li.appendChild(btnEliminar);

            // publicarlo

            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

// local data
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);

    publicar();
    
}

