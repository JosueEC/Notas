//! ############################################################
//! DECORADORES DE CLASE EN TYPESCRIPT #########################
//! ############################################################
// Un decorador es una funcion que recibe parametros expeciales

//* DECORADORES DE CLASE
// Los decoradores nos permiten extender las propiedades y
// funcionalidades de una clase

// Los decoradores de clase son ejecutados antes de instaciar la
// clase. Estos reciben un target y con eso ya se pueden asignar
// a una clase

// Los decoradores solo pueden ser usados en clases, metodos,
// propiedades, parametros y accessors

// Los decoradores pueden cambiar por completo toda lo que contiene
// la clase, se debe tener cuidado.

// El target que recibe la funcion, es la clase como tal.
function Repository(target: Function) {
  target.prototype.users = [];
  target.prototype.create = function (entity: object) {
    console.info(entity);
  }
}

@Repository
export class UserRepository {
  // ...
}

//* DECORADORES DE METODO
// Aqui simplemente creamos un elemento lista en el DOM
const ul = document.createElement('ul');

// Creamos uno mockup de datos como ejemplo
const users = [
  { name: 'Josue' },
  { name: 'Jesiel' },
  { name: 'Chava' }
]

// Esta es nuestra funcion decorador, la cual recibe un parametro
// retorna una funcion que recibe parametros del metodo, dentro de
// esta funcion ejecutamos la accion de mostrar el mensaje recibido
// por parametro para un mensaje de confirmacion de borrado y asi
// relaizar la accion de borrar o no el elemento en base a la
// confirmacion del usuario
function Confirm (message: string) {
  return function (_target: Object, _key: string | symbol, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (window.confirm(message)) {
        return original.apply(this, args);
      }

      return null;
    }
  }
}

// Despues solo agregamos este decorador a la funcion, de esta forma
// extendemos la funcionalidad del metodo.
export class UI {
  @Confirm('Este elemento sera eliminado ¿Estas seguro?')
  removeElement (element: HTMLElement) {
    element.remove();
  }
}

// Esto solo muestra el mockup de usarios en el DOM
const ui = new UI();

users.forEach(user => {
  const li = document.createElement('li');
  li.addEventListener('click', () => {
    ui.removeElement(li);
  })
  li.textContent = user.name;
  ul.appendChild(li);
})


document.body.appendChild(ul);


// * DECORADORES DE PROPIEDADES
function Capitalize () {
  return function (target: any, key: string | symbol) {
    let value = target[key];

    const getter = function () {
      return value;
    }

    function capitalize (word: string) {
      return word[0].toUpperCase() + word.slice(1);
    }

    const setter = function (data: string) {
      value = capitalize(data);
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

export class Post {
  @Capitalize()
  title: string = 'some title';
}

const post = new Post();

console.info(post.title);

