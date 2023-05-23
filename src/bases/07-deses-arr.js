console.log("Hola Mundo");

const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes);

const [goku] = personajes;
console.log(goku);

const [p1] = personajes;
console.log(p1);

const [, p2] = personajes;
console.log(p2);

const [,, p3] = personajes;
console.log(p3);

const returnArray = () => {
    return ['ABC', 123]
} 

const [letras, numeros] = returnArray();
console.log(letras, numeros);


const funcUseState = (valor) => {
    return [valor, () => {console.log('Mensaje dentro del array');}];
};
const arr = funcUseState('Goku');
console.log(arr);

const [nombre, setNombre] = funcUseState('Goku');

console.log(nombre);
setNombre();