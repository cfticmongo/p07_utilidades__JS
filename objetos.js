// Métodos y propiedades de Objetos

let paciente1 = {
    nombre: 'Pilar',
    apellidos: 'Fernández López',
    fechaNacimiento: '1980-01-01',
    direccion: {
        calle: 'Gran Vía, 120',
        localidad: 'Madrid'
    }
}

console.log(paciente1.fechaNacimiento);
console.log(paciente1["fechaNacimiento"]); // idem anterior
console.log(paciente1.direccion.calle);

// for in para iterar propiedades de los objetos
for (let propiedad in paciente1 ) { // Devuelve en la variable cada propiedad del objeto
    console.log(paciente1[propiedad]);
}

// A través del objeto o clase global Object

console.log(Object.keys(paciente1)) // Devuelve las propiedades de un objeto en un array
console.log(Object.values(paciente1)) // Devuelve los valores de las propiedades de un objeto en un array

// Métodos y propiedades para Arrays de objetos (Funciones de alto nivel ECMA6)

let alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6, apto: null},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7, apto: null},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 3.6, apto: null},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuacion: 6.7, apto: null}
]

// Método forEach
// <array>.forEach((elementoArray, indice) => { // A forEach se le pasa una callback que se ejecutará tantas veces como elementos tenga el array
//     Código que puede utilizar tanto cada elemento como su índice
// })

let numeroAlumnosAptos = 0;

alumnos.forEach((alumno, index) => {
    if (alumno.puntuacion >= 5) { // podemos usarlo para obtener valores del array
        numeroAlumnosAptos++; 
        alumno.apto = true; // podemos usarlo para modificar el array ¿Es buena práctica?
    } else {
        alumno.apto = false;
    }
})

console.log(numeroAlumnosAptos);
console.table(alumnos);

// Método map
// <array>.map((elemento, index) => { 
//  código a ejecutar con cada elemento
//  return el resultado del código
//}) // Map devuelve el resultado de la ejecución de cada callback en un array

const listadoNombresAlumnos = alumnos.map((alumno, index) => {
    return `${index + 1}.- ${alumno.nombre} ${alumno.apellidos}`;
})

console.log(listadoNombresAlumnos);

// Otro map

const dataSet = [
    {
        "pais": "es",
        "provincia": "ba",
        "10-01-21": "430",
        "10-02-21": "450",
        "10-04-21": "310"
    },
    {
        "pais": "es",
        "provincia": "ma",
        "10-01-21": "230",
        "10-02-21": "480",
        "10-03-21": "290",
        "10-04-21": "510"
    }
]

const dataSetPromedio = dataSet.map(({pais,provincia, ...datosDiarios}) => {
    let totalDatosDiarios = 0;
    Object.values(datosDiarios).forEach(datoDiario => totalDatosDiarios += datoDiario*1);
    return {
        pais,
        provincia,
        promedio: totalDatosDiarios / Object.values(datosDiarios).length
    }
})

console.log(dataSetPromedio);

// Filter

const alumnosNoAptos = alumnos.filter((alumno) => { // Devuelve el elemento del array si se cumple la expresión condicional
    return alumno.puntuacion < 5;
})

console.log(alumnosNoAptos);

// Reduce 
// Recorre los elementos del array y en cada ciclo de iteración
// actualiza un valor inicio y otro valor final
// a partir de los valores que leamos en los elementos
// <array>.reduce((valorInicio, valorFinal) => {
//   // código de actualización del valorInicio y el valorFinal 
// })

const puntuaciones = [12.3, 45.6, 7.89, 12.4];

const sumaPuntuaciones = puntuaciones.reduce((valorInicio, valorFinal) => {
    return valorInicio + valorFinal;
})

console.log(sumaPuntuaciones);

let alumnos2 = [
    {nombre: 'María', apellidos: 'Zuil', puntuaciones: [4.3,3.5,7.8,8.1], promedio: null},
    {nombre: 'Juan', apellidos: 'Gómez', puntuaciones: [4.9,5.6,7.1,2.4], promedio: null},
    {nombre: 'Laura', apellidos: 'López', puntuaciones: [3.3,9.5,6.8,3.1], promedio: null},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuaciones: [7.3,3.9,9.8,4.1], promedio: null}
]

alumnos2.forEach(alumno => {
    let sumaPuntuaciones = alumno.puntuaciones.reduce((inicio, final) => inicio + final);
    alumno.promedio = sumaPuntuaciones / alumno.puntuaciones.length;
})

console.log(alumnos2);

// Uso de sort en arrays de objetos (para ordenar por una propiedad)
// El método sort para arrays permite pasar una función de ordenación

const ordenaApellidoAscendente = (a, b) => {
    if (a.apellidos > b.apellidos) {
        return 1;
    } else {
        return -1;
    }
}

const ordenaApellidoDescendente = (a, b) => {
    if (a.apellidos < b.apellidos) {
        return 1;
    } else {
        return -1;
    }
}

let alumnosSorted = [...alumnos].sort(ordenaApellidoAscendente);
console.log(alumnosSorted);
alumnosSorted = [...alumnos].sort(ordenaApellidoDescendente);
console.log(alumnosSorted);


