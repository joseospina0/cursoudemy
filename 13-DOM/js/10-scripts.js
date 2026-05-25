const enlace = document.createElement('a');

// agregandole texto 
enlace.textContent = 'Nuevo enlace';

//añadiendo href 
enlace.href = '/nuevo-enlace';

//agregar una tarjeta 
enlace.target = "_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = miFunction;


console.log(enlace);


// seleccionar navegacion 

const navegacion = document.querySelector('.navegacion');

// añadir hijo en ultima posicion 
//navegacion.appendChild(enlace);

// añadir hijo en posicin especifica
console.log(navegacion.children);

console.log(navegacion.children[1].textContent);

navegacion.insertBefore(enlace, navegacion.children[1]);

console.log(navegacion.children[1].textContent);

console.log(navegacion.children);

// Crear n CARD 


