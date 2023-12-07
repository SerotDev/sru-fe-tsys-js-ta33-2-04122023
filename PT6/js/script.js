const longitudNumero = (numero) => {
    let texto;
  if (!Number.isInteger(numero) || isNaN(numero)) {
    texto = "ERROR: No es un número entero.";
  } else{
    texto = "El número " + numero + " tiene una longitud de ";
    let cifras = numero < 0 ? String(numero).length-1 : String(numero).length;
    texto += cifras + " cifras.";
  }
  return texto;
};

const numero = parseInt(prompt("Introduce un número entero:"));

alert(longitudNumero(numero));
