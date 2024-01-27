//! ############################################################
//! TIPOS EN TYPESCRIPT ########################################
//! ############################################################
// En TypeScript podemos crear nuestros propios tipos usando la
// palabra type

// Podemos usar la palabra readonly para definir que una vez que se
// le asigne un valor a esta propiedad, este no va a poder cambiar
// esta propiedad tambien puede ser usada en clases e interfaces

// De igual forma, podemos agregar propiedades opcionales
type Beer = {
  readonly name: string,
  alcohol: number,
  brand?: string
}

type Snack = {
  nameSnack: string,
  price: number
}

// Podemos usar estos tipos justamente para tipar, asi como tambien
// acceder a las propiedades anidadas mediante la notacion de punto
function show (beer: Beer): void {
  console.info(`info: ${beer.name}, ${beer.alcohol}`);
}

// Al instanciar un objeto del tipo que hemos creado, nuestro objeto
// va a estar esperando las propiedades que le hemos definido en el
// tipo
const myBeer: Beer = {
  name: 'Corona',
  alcohol: 7.5
}

// Este concepto se llama interseccion de tipos, donde nosotros
// podemos crear objetos a partir de la combinacion de dos tipos
// basicamente solo hay que establecer la interseccion y mandar
// los valores de las propiedades de ambos tipos
const combo: Beer & Snack = {
  name: 'Corona',
  alcohol: 4.5,
  brand: 'Modelo',
  nameSnack: 'Pastel',
  price: 100
}

// myBeer.name = 'Victoria'; marca error porque la propiedad esta
// marcada como readonly
show(myBeer);