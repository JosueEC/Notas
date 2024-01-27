//? -----------------------------------------------------------
//?     OBJETOS EN JAVASCRIPT
//? -----------------------------------------------------------
/*
-- En JavaScript, todo se considera como un Objeto.
-- Esta es la forma en la que podemos definir objetos.
*/
const persona = {
    name: 'Josue',
    age: '26',
    ocupation: 'Backend Developer'
}

//? -----------------------------------------------------------
//?     FUNCIONES ESPECIALES DE OBJETOS
//? -----------------------------------------------------------
/*
-- Devuelve un arrray con las keys y los values del objeto recibido
-- por parametros. Y dado que devuelve un arreglo, entonces tenemos
-- acceso a metodos de arrya como .length .map .filter etc 
*/
const keyValues = Object.entries(persona);

/*
-- Verifica si el objeto recibido como primer parametro, tiene la
-- propiedad(key) recibida en el segundo parametro. Devuelve un
-- booleano.
*/
const hasName = Object.hasOwnProperty.call(persona, 'name'); // true