// Tracersing de DOM (Recorreer el documento )

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); // primer hijo de navegacion 
console.log(navegacion.lastElementChild); // ultimo hijo de navegacion


/* console.log(navegacion);

console.log(nevagacion.childNodes); // los espacion en blanco son considerados como elementos 

console.log(navegacion.children); */

/* console.log(navegacion.children[3]);
console.log(navegacion.children[3].nodeName);
console.log(navegacion.children[3].nodeType); */


const card = document.querySelector('.card');

/* card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'
card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]); */

// para ir hacia el padre del elemento

/* console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling); */

const ultimoCard = document.querySelector('card.:nth-child(4)');

console.log(ultimoCard.previousElementSibling);

