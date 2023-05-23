console.log('Hola Mundo');

const persona = {
nombre: 'Tony',
apellido: 'Stark',
edad: 36,
direccion: {
    ciudad: 'New York',
    zip: 54321,
    lat: 14.5684,
    lng: 34.5897,
  },
}


const persona2 = {...persona};

persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);