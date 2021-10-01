// Métodos y propiedades para fechas (basado en el uso de Date)

// Obtener la fecha actual

let fechaActual = new Date(); // Sin argumentos instancia un objeto con la fecha actual
console.log(fechaActual);

// Establecer fechas en JS
// 1ª Opción pasando argumentos: año, mes(indexado a cero), dia, horas, minutos, segundos, milisegundos

let fechaNacimiento = new Date(1991, 1, 11, 15, 22, 23);
console.log(fechaNacimiento);

// 2ª Opción pasando un argumento de tipo fecha-string 'yyyy-MM-dd';

let fechaExpedicion = new Date('2021-10-01');
console.log(fechaExpedicion);

// 3º Opción pasando un argumento con milisegundos desde EPOCH

let fechaAleatoria = new Date(74541656546);
console.log(fechaAleatoria);

