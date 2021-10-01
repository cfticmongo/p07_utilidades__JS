// Métodos y propiedades para number

// Objeto o clase global Math

let puntuacion = 2.3; 

// Redondeo

let puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacion = -2.5;
puntuacionRedondeada = Math.round(puntuacion);
console.log(puntuacionRedondeada);

puntuacionRedondeada = puntuacion < 0 ? Math.round(-puntuacion) * -1 : Math.round(puntuacion);
console.log(puntuacionRedondeada);

// Redondeo al alza

puntuacion = 9.3;

let puntuacionAlAlza = Math.ceil(puntuacion);
console.log(puntuacionAlAlza);

// Redondeo a la baja

puntuacion = 9.7

let puntuacionAlaBaja = Math.floor(puntuacion);
console.log(puntuacionAlaBaja);

// random() devuelve un número aleatorio entre 0 y 0.9999999999999999

let nombres = ['Juan','Sara','Carlos','Pilar','Pedro'];

let nombreAlAzar = nombres[Math.floor(Math.random() * nombres.length)];
console.log(nombreAlAzar);

// Parseo de string a number;

let resultado = '9.7'; // tipo string

let resultadoParseado = parseFloat(resultado) // Convierte a number manteniendo la parte flotante
console.log(resultadoParseado);

resultadoParseado = parseInt(resultado) // Convierte a number sin mantener la parte flotante
console.log(resultadoParseado);

// Parseo de number a string

resultado = 78.98; // tipo number

resultadoParseado = resultado.toString(); // Convierte a string
console.log(resultadoParseado);

// Procedimientos 'tricky'

resultado = '24.31';
resultadoParseado = resultado * 1; // Convierte a number
console.log(typeof resultadoParseado);

resultado = 12.31564;
resultadoParseado = resultado + ''; // Convierte en string
console.log(typeof resultadoParseado);

// Precisión en JS

let x = 0.3;
let y = 0.1;

console.log(x - y);

// Pendiente usar librería decimal.js


