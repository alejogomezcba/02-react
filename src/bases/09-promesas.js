import { getHeroeById } from './bases/08-exp-imp'; 


console.log("heroes");
//const promesa = new Promise((resolve, reject) => {
//  setTimeout(() => {
//    console.log('Despues de dos segundos');
//    resolve();
//  }, 2000);
//});

//const promesa = new Promise((resolve, reject) => {
//    setTimeout(() => {
//        const heroe = getHeroeById(2);
//        resolve( heroe );
//        //reject( 'No se pudo encontrar el heroe' );
//    }, 2000);
//  });
//
//promesa.then((heroe) => {
//    console.log(heroe);
//})
//.catch(err => console.log(err));



const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve( heroe );
            } else reject( 'No se pudo encontrar el heroe' );
        }, 2000);
      });
}

getHeroeByIdAsync(1)
 .then( console.log)
 .catch( console.log );