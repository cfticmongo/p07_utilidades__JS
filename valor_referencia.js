// Paso por valor o por referencia en JS

// Los tipos primitivos tienen su paso por valor

let nombre1 = 'Juan';
let nombre2 = nombre1; // paso es por valor
console.log(nombre2);
nombre2 = 'Laura';
console.log(nombre2);
console.log(nombre1);

// Los tipos compuestos (arrays y objetos) tienen su paso por referencia

let resultados1 = [9,12,4];
let resultados2 = resultados1; // paso es por referencia
console.log(resultados2);

resultados2.push(13); // donde estoy añadiendo 13 es en resultados1
console.log(resultados2);
console.log(resultados1);

// En arrays para romper el paso por referencia podemos usar concatenación o el spread operator en la asignación

let marcasCoreanas = ['KIA','Hyunday'];

let marcasSeleccionadas = [...marcasCoreanas]; // Alternativa clásica marcasCoreanas.concat()
marcasSeleccionadas.push('SEAT');
console.log(marcasCoreanas);
console.log(marcasSeleccionadas);

const modificoMarcas = (marcas) => {
    marcas.push('SEAT');
    let marcasModificadas = marcas;
    return marcasModificadas;
}

let marcasConReferencia = modificoMarcas(marcasCoreanas);
console.log(marcasCoreanas);
console.log(marcasConReferencia);