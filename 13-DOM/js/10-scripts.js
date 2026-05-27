/* const enlace = document.createElement('a');

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
 */

// seleccionar navegacion 
/* 
const navegacion = document.querySelector('.navegacion');

// añadir hijo en ultima posicion 
//navegacion.appendChild(enlace);

// añadir hijo en posicin especifica
console.log(navegacion.children);

console.log(navegacion.children[1].textContent);

navegacion.insertBefore(enlace, navegacion.children[1]);

console.log(navegacion.children[1].textContent);

console.log(navegacion.children); */

// 

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de electronica';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//  crear div (el padre de estos parrafos)

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';


// padre del div

const card = document.createElement('div');
card.classList.add('card');

// asiganar la imagen 
card.appendChild(imagen);

// agregar el div info dentro de este div card 

card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);

contenedor.insertBefore(card, contenedor.children[0]);f


console.log(card);




