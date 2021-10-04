// Funciones callback en JS
// Las funciones en JS son objetos 
// permite es que puedan ser pasadas como argumentos 
// de otras funciones 

const funcionCallBack = (nombre, imprimirMensaje) => { // En el segundo parámetro pasaremos funciones
    // otro código
    imprimirMensaje(nombre);
}

funcionCallBack('Laura', (nombre) => {
    console.log('Hola ' + nombre);
})

funcionCallBack('Laura', (nombre) => {
    console.log('Hello ' + nombre);
})