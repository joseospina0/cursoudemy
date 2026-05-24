const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);  // Devuelve el elemento h1  con el texto "Guía para hacer un sitio web"

/* console.log(encabezado.innerText);  // No encuentra texto escodido en el css
console.log(encabezado.textContent);  // Si encuentra elf
console.log(encabezado.innerHTML);  // Devuelve el HTML del elemento h1 "Guía para hacer un sitio web" */

/* document.querySelector('.contenido-hero h1').textContent = 'Nuevo encabezado'; */  // Cambia el texto
// del elemento h1 a "Nuevo encabezado"

const imagen = document.querySelector('.card img');
console.log(imagen);  // Devuelve el elemento img de la clase card

// imagen.src = 'img/hacer2.jpg';  // Cambia la imagen del elemento img a "hacer2.jpg"
