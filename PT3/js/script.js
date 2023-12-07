// Función para validar si un numero es primo o no
const esNumeroPrimo = (numero) => {
  esPrimo = true;
  if (numero > 1) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          esPrimo = false;
        }
      }
  } else  if (numero <= 0) {
    esPrimo = false
  }
  return esPrimo;
};

//Pedimos numero, comprobamos y mostramos resultado
const numero = parseInt(prompt("Introduce un número para conocer si es primo o no:"));
alert( esNumeroPrimo(numero) ? (numero + " es un numero primo.") : (numero + " no es un numero primo."));
