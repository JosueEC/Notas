//? -----------------------------------------------------------
//?     ESTRUCTURAS DE CONTROL
//? -----------------------------------------------------------
//? -----------------------------------------------------------
//?     OPERADOR TERNARIO
//? -----------------------------------------------------------
/*
-- El operador ternario nos permite definir estructuras de control
-- simples de 1 sola linea. Se compone de una evaluacion de true o
-- false y se preced de las acciones/valores respecto a la respuesta
-- true y a la respuesta false.
*/
const num = 3;
const binario = '011';
binario += (num%2 === 0) ? '0' : '1';

//? -----------------------------------------------------------
const elvisAunVive = (Math.PI > 4) ? true: false;

//? -----------------------------------------------------------
/*
-- El operador ternario, al igual que la clausula if puede realizar
-- varias acciones en cada caso, estas deben ir entre parentesis y
-- separadas por una coma.

-- La estructura igualmente retorna un valor en cada case, el valor
-- retornado sera el de la ultima instruccion separada por coma, en
-- esta caso ambos case retornan 'undefined' a menos que se agregue
-- el valor como ultima instruccion en cada case
*/
const age = 26;
const stop = false;

(age > 18) ? (
    alert('Ok, puedes pasar')
) : (
    stop = true,
    alert('No puedes pasar')
);
