// Desestructuring ECMA6 (extraer valor no referencia)

// Para arrays

let valores = [10, 20, 30, 40, 50]; 

let [valor1, valor2, valor3, ...restoValores] = valores; // puede ser tambien con const
// esto equivale a const valor1 = valores[0]; ...
console.log(valor1);
valor1 = 15;
console.log(valores);
console.log(valor2);
console.log(valor3);
console.log(restoValores);
restoValores[0] = 45;
console.log(valores);

// Para objetos

let alumno = {
    nombre: 'Pilar',
    apellidos: 'Fernández López',
    edad: 40
}

let {apellidos, edad} = alumno; // puede ser también con const
// equivale a let apellidos = alumno.apellidos; ...

console.log(apellidos);
apellidos = 'García';
console.log(edad);
console.log(alumno);