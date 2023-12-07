// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () =>
  (document.getElementById("js-notice-text").innerHTML =
    "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

let array = new Array(10);
for (let i = 0; i < array.length; i++) {
  array[i] = parseFloat(prompt("Introduce un numero para la posición " + i + " del array:"));
}

for (let i = 0; i < array.length; i++) {
  console.log("Posición " + i + " => " + array[i]);
}

