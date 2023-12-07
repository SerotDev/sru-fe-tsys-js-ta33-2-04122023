// Funciones para calcular areas
const areaCirculo = (radio) => Math.PI * Math.pow(radio, 2);
const areaTriangulo = (base, altura) => (base * altura) / 2;
const areaCuadrado = (lado) => lado * lado;

// Pedimos datos y mostramos resultado de calcular el area
alert("El área del círculo es : "   + areaCirculo(prompt("Introduce el radio de círculo en cm")) + "cm");
alert("El área del triángulo es : " + areaTriangulo(prompt("Introduce la base del triángulo en cm"),prompt("Introduce la altura del triángulo en cm")) + "cm");
alert("El area del cuadrado es: "  + areaCuadrado(prompt("Introduce un lado del cuadrado en cm")) + "cm");
