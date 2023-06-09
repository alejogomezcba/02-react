import { heroes } from "../data/heroes";

//console.log(heroes);


const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
//console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
//console.log(getHeroeByOwner('DC'));
//console.log(getHeroeByOwner('Marvel'));

export {
    getHeroeById,
    getHeroeByOwner,
}