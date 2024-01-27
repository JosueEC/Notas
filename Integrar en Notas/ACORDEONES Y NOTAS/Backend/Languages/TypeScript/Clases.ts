//! ############################################################
//! CLASES EN TYPESCRIPT #######################################
//! ############################################################
// Tenemos 3 modificadores de acceso en TypeScript:
//? public
  // Vuelve publico el parametro o metodo
//? private
  // Vuelve privado el parametro o metodo, este solo podra ser
  // accedido desde la clase donde fue creado
//? protected
  // Permite acceder al parametro o metodo desde la clase donde
  // fue creado y desde las clase hijas (clases que heredan)

export class User {
  // Propiedades
  // En esta sintaxis se establece que el valor no puede ser nullo
  private name: string;
  // En esta sintaxis establecemos que el valor si puede ser nullo
  private age?: number;
  protected email: string;
  private password: string;
  private amount: number;

  constructor (name: string, age: number, email: string, password: string, amount: number) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.amount = amount;
  }

  // Metodos
  public getEmail (): string {
    return this.email;
  }

  public setName (name: string) {
    this.name = name;
  }

  public getAmount (): number {
    return this.amount;
  }
}

//! ############################################################
//! INSTANCIAS EN TYPESCRIPT ###################################
//! ############################################################
const user = new User('Josue', 26, 'josueev.cruz@gmail.com', '1234', 10);
user.getEmail();
user.setName('Josue de nuevo');