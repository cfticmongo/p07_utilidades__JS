// Métodos y propiedades de JS para arrays

let frutas = ['manzanas','kiwis','peras'];

// Propiedades

for (i=0; i < frutas.length; i++) { // length devuelve el nº de elementos del array
    console.log(frutas[i]);
}

// Métodos mutables (modifican el array)

let frutaExtraida = frutas.pop(); // Extraer el último elemento del array
console.log(frutaExtraida);
console.log(frutas);

frutas.push('albaricoques','cerezas'); // Añade uno o varios elementos al final del array
console.log(frutas);

frutaExtraida = frutas.shift();   // Extrae el primer elemento del array y desplaza el resto a la izqda
console.log(frutaExtraida);
console.log(frutas);

frutas.unshift('plátanos','fresas'); // Añade uno o varios elementos al inicio del array y desplaza el resto a la derecha
console.log(frutas);

// Método splice para eliminar o sustituir elementos
// splice(indice, cantidad de elementos a sustituir, elementos)

frutas.splice(1,2); // Eliminar desde la posición 1, 2 elementos
console.log(frutas);

frutas.splice(2,1); // Eliminar el elemento de la posición 1
console.log(frutas);

frutas.splice(1,1,'peras'); // Desde la posición 1, sustituimos 1 elemento por el elemento que se pasa como 3er argumento
console.log(frutas);

frutas.splice(1,1,'kiwis','naranjas'); // Desde la posición 1, sustituye 1 elemento por los que se pasan como 3º y sucesivos argumentos
console.log(frutas);

frutas.push('sandías');
console.log(frutas);

frutas.splice(1,2,'fresas','cerezas'); // Desde la posición 1, sustituye 2 elementos por los que se pasan como 3º y sucesivos argumentos
console.log(frutas);


frutas.splice(2,0,'caquis','nueces'); // Desde la posición 2, sustituye 0 elementos por los que se pasan como 3º y sucesivos
console.log(frutas);

// Para ordenar

frutas.sort(); // Ordena mutando el orden (lexicográfico UTF8)

console.log(frutas);

frutas.reverse();
console.log(frutas);

// Métodos inmutables (no modifican el valor del array);

let frutasSeleccionadas = frutas.slice(2,4); // Extrae elementos desde la posición del primer argumento (incluido)
                                             // hasta la posición del segundo argumento (excluido);
console.log(frutasSeleccionadas);  
console.log(frutas); 

console.log(frutas.includes('pomelos')); // Devuelve true o false si contiene el elemento

// Concatenar arrays

let marcasEuropeas = ['SEAT','Renault','Mercedes Benz'];
let marcasAsiaticas = ['Subaru','Hyunday','Lexus'];

let marcasVehiculos = marcasEuropeas.concat(marcasAsiaticas); // Modo clásico
console.log(marcasVehiculos);

// ECMA6 disponemos del spread operator ...
// Disgrega los elementos de un array

let marcasCoreanas = ['KIA','Hyunday'];
let marcasJaponesas = ['Subaru','Toyota','Lexus'];

marcasAsiaticas = [...marcasCoreanas, ...marcasJaponesas];
console.log(marcasAsiaticas);