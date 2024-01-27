//! ############################################################
//! HERENCIA EN TYPESCRIPT #####################################
//! ############################################################
import { User }  from './Clases'

class Student extends User {
  private matricula: string;
  private semester: number;
  private tax: number;

  constructor (name: string, age: number, email: string, password: string, amount: number, tax: number, matricula: string, semester: number) {
    super(name, age, email, password, amount);
    this.tax = tax;
    this.matricula = matricula;
    this.semester = semester;
  }

  // Podemos sobreescribir los metodos de una clase solo declarando
  // el metodo con el mismo nombre, para acceder a los metodos y
  // variables de la clase padre, usamos la palabra super
  // Para sobreescribir, usamos la palabra override
  public override getAmount(): number {
    return this.tax + super.getAmount();
  }

}

const student = new Student('Josue', 26, 'josueev.cruz@gmail.com', '1234', 10, 7, '15011304', 5);
student.getEmail();