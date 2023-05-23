console.log("Hola Mundo");

const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Goku"));
console.log(saludar2("Vegeta"));

const getUser2 = () => {
  return {
    uid: "ABC123",
    username: "Elver",
  };
};

const getUser = () => ({
  uid: "ABC123",
  username: "Elver",
});

console.log(getUser());
console.log(getUser2());


const getUsuarioActivo = (nombre) => ({
    uid: "ABC456",
    username: nombre,
});

  console.log(getUsuarioActivo('Alejo'));  