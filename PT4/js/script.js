// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";

// Funcion para calcular factorial de un numero
const factorial = (n) => (n === 0) ? 1 : (n * factorial(n - 1));

//Pedimos datos y mostramos por prompt
const number = prompt("Escribe un numero para conocer su factorial:");
console.log("El factorial de " + number + " es " + factorial(number) + ".");
alert("El factorial de " + number + " es " + factorial(number) + ".");