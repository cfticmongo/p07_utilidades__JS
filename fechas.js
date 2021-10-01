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

// Métodos para los objetos Date

console.log(fechaActual.getFullYear()); // Devuelve el año de la fecha
console.log(fechaActual.getMonth()); // Devuelve el mes indexado a cero

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]

console.log(meses[fechaActual.getMonth()]);

console.log(fechaActual.getDate()); // Día del mes
console.log(fechaActual.getDay()); // Día de la semana
console.log(fechaActual.getHours()); // Devuelve las horas
console.log(fechaActual.getMinutes()); // Devuelve las minutos
console.log(fechaActual.getSeconds()); // Devuelve las segundos
console.log(fechaActual.getMilliseconds()); // Devuelve las milisegundos

const diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado']

const getMarcaTiempo = () => {
    let diaSemana = diasSemana[new Date().getDay()];
    let dd = new Date().getDate();
    let MM = meses[new Date().getMonth()];
    let yyyy = new Date().getFullYear();
    let hh = ('0' + new Date().getHours()).slice(-2);
    let mm = ('0' + new Date().getMinutes()).slice(-2);
    let ss = ('0' + new Date().getSeconds()).slice(-2);

    return `${diaSemana}, ${dd} de ${MM} de ${yyyy} a las ${hh}:${mm}:${ss}`;
}

let marcaFecha = getMarcaTiempo();
console.log(marcaFecha);

// Cálculo de fechas utilizando Date

console.log(new Date().getTime()); // Devuelve milisegundos desde Epoch

// Fecha dentro de 3 días

let fechaRecepcion = new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
console.log(fechaRecepcion);