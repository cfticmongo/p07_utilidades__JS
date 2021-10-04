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
    {nombre: 'Laura', apellidos: 'López', puntuacion: 9.6, apto: null},
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



