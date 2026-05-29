const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];



cargarEventListenerts();

function cargarEventListenerts(){
    listaCursos.addEventListener('click', AgregarCurso);

    carrito.addEventListener('click', eliminarCurso)

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
};

function AgregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}


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

// Revisar si un elelemnto ya exite en el carrito 

const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
if(existe){
    const cursos = articulosCarrito.map(curso => {
        // Itera sobre el array y encuentra los ids iguales
        if(curso.id === infoCurso.id){
            curso.cantidad++;
            return curso; // Retorna la informacion con la cantidad actualizada
        }else{
            return curso; // Si no encuentra mismos ids, devuelve la informacion como estaba 
        }
    });
    articulosCarrito = [...cursos];

    // Agregar elementos del curso al carrito
}else{
    articulosCarrito = [...articulosCarrito, infoCurso]
}
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
                <img src = ${cursoSeleccionado.imagen} width ="100">
            </td>
            <td>${cursoSeleccionado.titulo}</td>
            <td>${cursoSeleccionado.precio}</td>
            <td>${cursoSeleccionado.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${cursoSeleccionado.id}"> X </a>
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
