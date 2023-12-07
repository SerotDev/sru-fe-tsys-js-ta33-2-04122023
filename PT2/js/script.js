// Funcion para generar aleatorios
const crearAleatorios = (cantidad, min, max) => {
    let listaAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        listaAleatorios[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return listaAleatorios;
};

// Se introducen los datos.
const cantidad = parseInt(prompt('Introduce la cantidad de números aleatorios a generar:'));
const min = parseInt(prompt('Introduce el valor mínimo del rango de generacion de numeros aleatorios:'));
const max = parseInt(prompt('Introduce el valor máximo del rango de generacion de numeros aleatorios:'));

// Se generan los numeros formateando resultado segun indice y elemento se muestra resultado.
let resultado = cantidad + " numeros aleatorios generados entre " + min + " y " + max + ":\n";
resultado += crearAleatorios(cantidad, min, max).toString();
alert(resultado);