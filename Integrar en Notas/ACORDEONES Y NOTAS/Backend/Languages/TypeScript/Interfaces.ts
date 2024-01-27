//! ############################################################
//! INTERFACES EN TYPESCRIPT ###################################
//! ############################################################
// Las interfaces son una especie de contratos que nos obligan a
// implementar las propiedades y funciones declaradas en la interfaz

// A diferencia de las clase, podemos hacer herencia multiple de
// interfaces
interface Drink {
  name: string
}

// Se hereda de la misma forma que las clases
interface AlcoholicDrink extends Drink {
  alcohol: number;

  // De esta forma declaramos metodos en una interface, estos quedan
  // sin cuerpo, debido a que son las clases que heredan, las que
  // deben definir el cuerpo del metodo de la interface
  showInfo(): string;
}

interface MixedDrink {
  ingredients: string[];
}

// Para hacer uso de una interface en una clase, usamos la palabra
// implements en lugar de extends
class Wine implements AlcoholicDrink {
  name: string;
  alcohol: number;

  constructor (name: string, alcohol: number) {
    this.name = name;
    this.alcohol = alcohol;
  }

  public showInfo(): string {
      return `info: ${this.name}, ${this.alcohol}`;
  }
}

// Aqui podemos observar como es posible heredar de multiples
// interfaces

// Al heredar de alguna interfaz, lo que estamos haciendo es categorizar
// a la clase, por ejemplo, aqui estamos agregando la clase cockatil
// a la categoria bebida alcoholica y bebida mezclada
class Cocktail implements AlcoholicDrink, MixedDrink {
  name: string;
  alcohol: number;
  ingredients: string[];

  constructor (name: string, alcohol: number, ingredients: string[]) {
    this.name = name;
    this.alcohol = alcohol;
    this.ingredients = ingredients;
  }

  public showInfo(): string {
    // reduce ejecuta una accion sobre cada elemento del array, recibe
    // una funcion flecha, la cual ejecuta la logica, y un segundo
    // parametro como valor inicial del acumulador, en el acumuladore
    // se van guardando los cambios en el elemento y el elemento es eso,
    // el elemento como tal, valga la redundancia
    const ingredientsInfo = this.ingredients.reduce((acumulator, element) => {
      return acumulator + ' ' + element + ', '
    }, '')
    return `info: ${this.name}, ${this.alcohol}, ${ingredientsInfo}`
  }
}

//! ############################################################
//! INSTANCIAS DE CLASES QUE IMPLEMENTAN INTERFACES ############
//! ############################################################
const margarita = new Cocktail('Margarita', 7.5, ['tequila', 'limon', 'sal', 'soda']);
const rioja = new Wine('Vino Rioja', 7.5);
const malbec = new Wine('Vino Malbec', 7.5);

// Aqui tenemos una funcion que recibe una coleccion de objetos de
// la interface AlcoholicDrinks, esto significa que en esta coleccion
// yo pudeo agregar instancias de clases que implementen la interface
// AlcoholicDrinks

const AlcoholicDrinkCollection: AlcoholicDrink[] = [
  margarita,
  rioja,
  malbec
]

function showDrinks (drinks: AlcoholicDrink[]): void {
  drinks.forEach(item => console.info(item.showInfo()))
}

showDrinks(AlcoholicDrinkCollection);

