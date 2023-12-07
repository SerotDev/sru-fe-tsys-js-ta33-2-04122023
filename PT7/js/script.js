// Espera a que cargue el documento y muestra un texto en el elemento con id js-notice-text del documento html
window.onload = () => document.getElementById("js-notice-text").innerHTML = "Accede a la consola de las Herramientas para Desarrolladores del navegador (F12 &gt Console)";


const cambioDivisa = (euros, divisa) => {
  const tasaCambio = [
    { nombre: "dolares", tasa: 1.12, simbolo: "$" },
    { nombre: "yenes", tasa: 123.61, simbolo: "¥" },
    { nombre: "libras", tasa: 0.85, simbolo: "£" }
  ];

  let eurosIsNumber = true;
  if (isNaN(euros) || euros <= 0) {
    console.log("ERROR: Ingresa un numero entero positivo.");
    eurosIsNumber = false;
  }
  let divisaExists = false;
  tasaCambio.forEach(element => {
    if (element.nombre === divisa.toLowerCase()) {
      divisaExists = true;
    }
  });
  if (!divisaExists) {
    console.log("ERROR: Tipo de moneda no válida (dolares, yenes o libras)");
  }

  if (eurosIsNumber && divisaExists) {
    divisa = tasaCambio.find((element) => element.nombre === divisa.toLowerCase());
    const cambio = euros * divisa.tasa;
    console.log(euros + "€ equivale a " + cambio.toFixed(2) + divisa.simbolo);
  }
};

const euros = parseFloat(prompt("Introduce la cantidad de euros:"));
const divisa = prompt("Introduce la moneda a la que deseas convertir (dolares, yenes o libras):");
cambioDivisa(euros, divisa);
