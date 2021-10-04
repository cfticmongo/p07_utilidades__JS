// Métodos asíncronos en JS

// setTimeout método global que permite retrasar la ejecución de un bloque de código

console.log('Hola');
setTimeout(() => {
    console.log('Hasta pronto');
}, 2000);
console.log('¿Qué tal?');

// setInterval método global que permite ejecutar un bloque de código cada cierto intervalo de tiempo

let contador = 0;
const timer = setInterval(() => {
    console.log(++contador);
    if(contador === 10) {
        clearInterval(timer);
    }
}, 1000);

