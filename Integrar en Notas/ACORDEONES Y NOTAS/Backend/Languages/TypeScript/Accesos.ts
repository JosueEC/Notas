//! ############################################################
//! ACCESOS EN TYPESCRIPT ######################################
//! ############################################################
// Los accessors son los metodos set de TypeScript que nos permiten
// modificar el valor de una propiedad privada
class Account {
  private amount: number;
  private commission: number;

  constructor (amount: number, commision: number) {
    this.amount = amount;
    this.commission = commision;
  }

  // Esta es la sintaxis para crear el accessor set de una propiedad
  // de la clase, la cual es privada
  public set setAmount (amount: number) {
    if (amount < 0 ) {
      amount = 0;
    }

    this.amount = amount;
  }

  // Lo mismo aplica para el acceso de tipo get
  public get total (): number {
    return this.amount + this.commission;
  }
}

//! ############################################################
//! USO DE ACCESSORS EN TYPESCRIPT #############################
//! ############################################################
const account = new Account(10, 3);
// A diferencia de un get, el set no requiere de llamarse como una
// funcion, simplemente le asignas el valor como si se tratase de un
// objeto
account.setAmount = 20;

// De igual forma, se pude acceder a una propiedad privada a traves
// de su accesor get, y este tambien no necesita ser llamado como
// funcion, solo se accede mediante la notacion de punto
account.total