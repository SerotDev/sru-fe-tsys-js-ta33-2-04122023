// Funcion para pasar de decimal a binario
const decimalABinario = (num) => {
  let numNegativo;
  let decimal = num;
  let binario = "";
  decimal < 0 ? (numNegativo = true) : (numNegativo = false);
  decimal = Math.abs(num);
  while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
  }
  numNegativo ? (binario = "-" + binario) : binario;
  return binario;
};

// Pedimos datos, calculamos y mostramos resultado
const decimal = parseInt(prompt("Introduce un número decimal:"));
const binario = decimalABinario(decimal);
alert("El número " + decimal + " en binario es " + binario);
