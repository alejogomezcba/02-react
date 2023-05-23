console.log('Hola Mundo');

const nombre = 'Alejo';
const apellido = 'Gomez';

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
    return `Hola ${nombre} ${apellido}`
}

console.log(`Este es un saludo: ${getSaludo(nombre, apellido)}`);