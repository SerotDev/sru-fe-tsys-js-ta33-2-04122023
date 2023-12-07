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
    array[i] = aleatorioRango(0, 9);
  }
};
const multiplicarArrays = (array1, array2) => {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3[i] = array1[i] * array2[i];
  }
  return array3;
};
const printearArray = (array, nombreArray) => {
  console.log("-------------------------------------");
  console.log("-------------  " + nombreArray + "  -------------");
  for (let i = 0; i < array.length; i++) {
    console.log("Posición " + i + " => " + array[i]);
  }
};

//crea array llena de datos, copia el array y rellena con datos nuevos y por ultimo se crea un array resultado de multiplicar los dos anteriores
let array1 = new Array(tamano);
llenarArray(array1);
let array2 = [...array1];
llenarArray(array2);
let array3 = multiplicarArrays(array1, array2);
printearArray(array1, "ARRAY 1");
printearArray(array2, "ARRAY 2");
printearArray(array3, "ARRAY 3");
