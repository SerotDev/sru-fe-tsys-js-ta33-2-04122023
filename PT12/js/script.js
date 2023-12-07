// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () =>
  (document.getElementById("js-notice-text").innerHTML =
    "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)");

const aleatorioRango = (min, max, ultimoDigito) => {
  aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  while (String(aleatorio).slice(-1) !== String(ultimoDigito)) {
    aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return aleatorio;
};
const llenarArray = (array, min, max, ultimoDigito) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = aleatorioRango(min, max, ultimoDigito);
  }
};
const printearArray = (array, nombreArray) => {
  console.log("-------------------------------------");
  console.log("-------------  " + nombreArray + "  -------------");
  for (let i = 0; i < array.length; i++) {
    console.log("Posición " + i + " => " + array[i]);
  }
};

const tamano = parseInt(prompt("Introduce el tamaño del array:"));
const ultimoDigito = parseInt(
  prompt("Introduce el ultimo dígito de los numeros aleatorios a generar:")
);

// Crea array con tamaño introducido por el usuario, lo llena con aleatorios terminados con el caracter que indique el usuario
if (ultimoDigito < 0 || ultimoDigito > 9) {
  alert("ERROR: Último digito negativo o no correcto.");
} else {
  let array = new Array(tamano);
  llenarArray(array, 1, 300, ultimoDigito);
  printearArray(array, "ARRAY 1");
}
