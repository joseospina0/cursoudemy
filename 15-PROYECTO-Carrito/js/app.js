const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListenerts();

function cargarEventListenerts(){
    listaCursos.addEventListener('click', e => { 
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const cursoSeleccionado = e.target.parentElement.parentElement
            leerDatosCurso(cursoSeleccionado);
        }
    })
};


// Lee el contenido del html y extrae la info del curso 
function leerDatosCurso(cursoSeleccionado){

// Crear un objeto con la informacion del curso

    const infoCurso = {
        imagen: cursoSeleccionado.querySelector('img').src,
        titulo: cursoSeleccionado.querySelector('h4').textContent,
        precio: cursoSeleccionado.querySelector('.precio span').textContent,
        id: cursoSeleccionado.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agregar elementos del curso al carrito
    articulosCarrito = [...articulosCarrito, infoCurso]

    console.log(articulosCarrito);

    carritoHTML();

};

// Muestra el carrito en el html 

function carritoHTML(){

    // elimina los cursos repetidos 
    limpiarHTML();

    // Recorre el arreglo de la lista de los cursos y por cada y iteracion añade el contenido completo a contenedorCarrito
    articulosCarrito.forEach( cursoSeleccionado => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${cursoSeleccionado.titulo}
            </td>
        `;

        // Agregar el html del carrito en el  tbody
        contenedorCarrito.appendChild(row);
    })
};


// Antes de que se agrege a contenedorcarrito, elimina todos los hijos o elemento del array hasta dejar el ultimo (asi no se repite)
function limpiarHTML(){
    // Forma lenta 
   /*  contenedorCarrito.innerHTML = ''; */
    
    while(contenedorCarrito.firstChild){
        contenedorCarrito.firstChild.remove();
    }
};
