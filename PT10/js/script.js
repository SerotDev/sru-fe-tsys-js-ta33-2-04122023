// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () =>
  (document.getElementById("js-notice-text").innerHTML =
    "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

const aleatorioRango = (min, max) => {
  aleatorio = 0;
  while (!esNumeroPrimo(aleatorio)) {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return aleatorio;
};
const llenarArray = (array, min, max) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = aleatorioRango(min, max);
  }
};
// Función para validar si un numero es primo o no
const esNumeroPrimo = (numero) => {
  esPrimo = true;
  if (numero > 1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        esPrimo = false;
      }
    }
  } else if (numero <= 0) {
    esPrimo = false;
  }
  return esPrimo;
};
const tamano = parseInt(prompt("Introduce el tamaño del array:"));
const min = parseInt(prompt("Introduce valor mínimo del rango de los numeros aleatorios a generar:"));
const max = parseInt(prompt("Introduce valor máximo del rango de los numeros aleatorios a generar:"));

// Crea array con tamaño introducido por el usuario, lo llena con aleatorios y lo muestra
let array = new Array(tamano);
llenarArray(array, min, max);
let primoMayor = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > primoMayor) {
    primoMayor = array[i];
  }
  console.log("Posición " + i + " => " + array[i]);
}
console.log("Primo Mayor: " + primoMayor);
