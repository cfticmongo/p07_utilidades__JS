// Métodos y propiedades para string

let nombre = 'Laura'; // equivalente a let nombre = new String('Laura');

console.log(nombre.length); // devuelve el nº de caracteres

console.log(nombre.toLowerCase()); // devolver el valor transformado a minúsculas
console.log(nombre.toUpperCase()); // idem mayúsculas

console.log(nombre); // los dos métodos anteriores son inmutables

let nombreEnMinusculas = nombre.toLowerCase();
console.log(nombreEnMinusculas);

console.log(nombre.charAt(2)); // Devuelve el caracter de la posición (indexado a cero)

console.log(nombre.indexOf('r')); // Devuelve la posición de la primera coincidencia
console.log(nombre.indexOf('z')); // Devuelve -1 si no encuentra coincidencias

console.log(nombre.toLowerCase().indexOf('l')); // Los métodos en JS se pueden encadenar

nombre = 'Amanda';

console.log(nombre.lastIndexOf('a')); // Devuelve la posición de la última coincidencia
console.log(nombre.includes('and')); // Devuelve true o false si contiene la cadena de caracteres

console.log(nombre.startsWith('A')); // Devuelve true o false si comienza con ese caracter
console.log(nombre.endsWith('z')); // Devuelve true o false si finaliza con ese caracter

let apellidos = 'López Pérez';

let nombreCompleto = nombre.concat(' ').concat(apellidos); // Poco utilizado
console.log(nombreCompleto);

let frase = '    Buenos días, necesito información sobre...     ';

console.log(frase.trim()); // Elimina espacios en blanco al principio y final del string

let password = '012345abcde';

console.log(password.slice(2,5)); // Devuelve el fragmento de string desde la primera posición incluida
                                // hasta la segunda posición excluida

console.log(password.slice(-3)); // Con argumento negativo devuelve los n últimos caracteres

// ECMA6 Template literals
// Utilizar comillas francesas para marcar el string y permite multilínea
// Permite interpolar con ${<expresión>}

let jugadora = {
    nombre: 'Laura',
    apellidos: 'Pérez Gómez',
    resultado: 9.6
}

let mensaje = `La jugadora ${jugadora.nombre} ${jugadora.apellidos}
tiene un resultado de ${jugadora.resultado}`;

console.log(mensaje);