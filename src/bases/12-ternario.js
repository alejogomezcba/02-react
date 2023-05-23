
console.log("heroes");

const activo = true;

//let mensaje = '';

const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje2 = (!activo) ? 'Activo' : 'Inactivo';
const mensaje3 = activo && 'Activo';
const mensaje4 = !activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);
console.log(mensaje4);