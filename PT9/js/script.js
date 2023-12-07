// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () =>
  (document.getElementById("js-notice-text").innerHTML =
    "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

const tamano = parseInt(prompt("Introduce el tamaño del array:"));
const aleatorioRango = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const llenarArray = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = aleatorioRango(0,9);
    }
};

//crea array con tamaño introducido por el usuario, lo llena con aleatorios y lo muestra
let array = new Array(tamano);
llenarArray(array);
let suma = 0;
for (let i = 0; i < array.length; i++) {
  suma += array[i];
  console.log("Posición " + i + " => " + array[i]);
}
console.log("Total sumado de aleatorios: " + suma);
