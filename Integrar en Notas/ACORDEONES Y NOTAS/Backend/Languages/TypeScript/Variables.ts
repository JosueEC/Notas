//! ############################################################
//! TIPOS PRIMITIVOS EN TYPESCRIPT #############################
//! ############################################################
let message: string;
message = "Hello!";

let number: number;
number = 26;

let is: boolean;
is = true;

//! ############################################################
//! TIPADO EN FUNCIONES ########################################
//! ############################################################
function sum (a: number, b: number): number {
  return a + b;
}

const product = (a: number, b: number): number => {
  return a * b;
} 

const result1 = sum(5, 4);
const result2 = product(5, 5);