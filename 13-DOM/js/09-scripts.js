/* const primerEnlace = document.querySelector('a');
primerEnlace.remove();
console.log(primerEnlace); */

const navegacion = document.querySelector('.navegacion');

navegacion.children[3].remove();

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);

console.log(navegacion.children);


