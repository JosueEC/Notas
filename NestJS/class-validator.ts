//?-------------------------------------------------------------
//?     VALIDAD CUALQUIER STRING
//?-------------------------------------------------------------
/*
-- Para trabajar con class-validator y class-transformer primero
-- debemos instalar sus dependencias en nuestro proyecto con el
-- comando:
* npm install --save class-validator class-transformer
*/

//?-------------------------------------------------------------
//?     VALIDAD CUALQUIER STRING
//?-------------------------------------------------------------
import {
    IsString,
    IsNotEmpty,
    MinLenght,
    MaxLenght
} from 'class-validator';

export class AnyString {
    @IsString()
    @IsNotEmpty()
    @MinLenght()
    @MaxLenght()
    username: string;
}


//?-------------------------------------------------------------
//?     VALIDAR STRINGS ESPECIFICOS
//?-------------------------------------------------------------
import {
    ArrayNotEmpty,
    IsArray,
    IsIn
} from 'class-validator';

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

export class SpecificString {
    @IsArray()
    @ArrayNotEmpty()
    @IsIn(weekdays)
    day: Array<string>;
}


//?-------------------------------------------------------------
//?     VALIDAR UN ARRAY DE STRING DE FORMA ANIDADA
//?-------------------------------------------------------------
import {
    Contains,
    Matches
} from 'class-validator';

export class StringArrayOne {
/*
-- Cuando queremos realizar validaciones anidadas podemos usar la
-- instruccion { each: true } para que la validacion de aplique por
-- cada elemento anidado:
-- 
-- @IsString - Verifica que cada item del array se de tipo String.
-- 
-- @MaxLenght - Verifica que la longitud maxima de cada item del
--      array sea de 6 caracteres.
-- 
-- @Matches - Verifica que cada elemento del array cumpla con la
--      expresion regular definida en los parametros. En este caso
--      se verifica que cada string contenga solo letras del 
--      alfabeto
-- 
-- @Contains - Verifica que cada item del arra}eglo contento un
--      texto en especifo, en este caso se espera que cad item
--      contenga el texto hello en alguna parte de la cadena
*/
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    @MaxLenght(6, { each: true })
    @Matches('^[a-zA-Z\\s]+$', undefined, { each: true })
    @Contains('hello', { each: true })
    arrayStrings: Array<string>;
}


//?-------------------------------------------------------------
//?     VALIDAR UN ARRAY DE STRING CON UN PREFIJO ESPECIFICO
//?-------------------------------------------------------------
//?-------------------------------------------------------------
//?     CUSTOM VALIDATORS
//?-------------------------------------------------------------
import {
    Validate,
    ValidateNested,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

/*
@ValidateConstraint - Nos permite definir una clase como un
--      validador de class-validator, qui mismo podemos definir un name

-- Es necesario que esta clase implemente la interface
* ValidatorConstraintInterface
-- La cual te obliga a implementar el metodo validate en el cual podemos
-- definir el codigo para implementar las validaciones que nosotros
-- querramos.

-- @Validate - Es el decorador que nos permite hacer uso del validador
--      customizado que creamos anteriormente. Solo debemos pasar en
--      parametros el nombre de la clase del validador y el mensaje de
--      error cuando la validacion no sea aprobada
*/
@ValidatorConstraint({ name: 'arrayPrefixValidator' })
export class ArrayPrefixValidator implements ValidatorConstraintInterface {
    validate(values: string[] = []): boolean {
        if (values.length) {
            return values.every((value) => value.startsWith('str-'));
        }
        return false;
    }
}

export class StringArray {
    @IsArray()
    @ArrayNotEmpty()
    @Validate(ArrayPrefixValidator, { message: 'No str- prefix' })
    stringArray: Array<string>;
}


//?-------------------------------------------------------------
//?     VALIDAR CUALQUIER NUMERO
//?-------------------------------------------------------------
import {
    IsNumber,
    Max,
    Min
} from 'class-validator';

export class AnyNumber {
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(200)
    age: number;
}


//?-------------------------------------------------------------
//?     VALIDAR UN NUMERO ESPECIFICO
//?-------------------------------------------------------------
//?-------------------------------------------------------------
//?     CUSTOM VALIDATOR
//?-------------------------------------------------------------
@ValidatorConstraint({ name: 'isDividedBy17' })
export class IsDividedBy17 implements ValidatorConstraintInterface {
    validate(value: number): boolean {
        if (value) {
            return value % 17 === 0;
        }
        return false;
    }
}

export class SpecificNumber {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsDividedBy17, { message: 'No divides by 17' })
    specificNumber: number;
}

//?-------------------------------------------------------------
//?     VALIDAR UN ARRAY DE NUMEROS
//?-------------------------------------------------------------
//?-------------------------------------------------------------
//?     CUSTOM VALIDATOR
//?-------------------------------------------------------------
@ValidatorConstraint({ name: 'isEvenNumber' })
export class IsEvenNumber implements ValidatorConstraintInterface {
    validate(numbers: Array<number>): boolean {
        if (numbers) {
            return numbers.every((number) => number % 2 === 0);
        }
        return false;
    }
}

export class SpecificNumberArray {
    @IsNumber()
    @IsNotEmpty()
    @Validate(IsEvenNumber, { message: 'No divided by 2' })
    numberList: Array<number>;
}


//?-------------------------------------------------------------
//?     VALIDAR OBJETOS ANIDADOS
//?-------------------------------------------------------------
import {
    IsRequired,
    Type
} from 'class-validator';

{
    movies: [{
        name: 'The Jurassic Park',
        yearOfRelease: 1999,
        languages: ['en'],
        genre: ['sci-fi', 'thriller'],
    },
    {
        name: 'The Croods',
        yearOfRelease: 2012,
        languages: ['en', 'fr', 'es'],
        genre: ['animation', 'kids']
    }]
}

const validLanguages = ['en', 'es', 'fr'];
const validGenres = ['sci-fi', 'thriller', 'animation', 'horror', 'vintage'];

export class Movie {
    @IsString()
    @IsNotEmpty()
    @IsRequired()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @IsRequired()
    yearOfRelease: number;

    @IsNotEmpty()
    @IsString()
    @IsIn(validLanguages)
    @IsRequired()
    languages: Array<string>;

    @IsNotEmpty()
    @IsString()
    @IsIn(validGenres)
    @IsRequired()
    genre: Array<string>;
}

export class MovieList {
    @IsArray()
    @ArrayNotEmpty()
    @Type(() => Movie)
    movies: Array<Movie>;
}


//?-------------------------------------------------------------
//?     VALIDAR SI UN EMAIL YA ESTA REGISTRADO
//?-------------------------------------------------------------
//?-------------------------------------------------------------
//?     CUSTOM VALIDATOR
//?-------------------------------------------------------------
/*
-- Esta es otra forma en la que podemos crear validadores customizados
-- pero ahora creando el decorador y en este caso accediendo a bases
-- de datos.
*/
import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { ValidationOptions } from 'class-validator';

/*
-- De igual forma, creamos una clase que implemente de la interface
-- ValidatorConstraintInterface para asi poder implementar el metodo
-- validate.

-- En este caso inyectamos el userService en el constructor de la clase
-- ya que haremos uso de una de las funciones del mismo. Asi mismo
-- marcamos la clase con la anotacion @Injectable ya que estaremos
-- inyectando el servicio

-- En la funcion validate definimos la logica para validar que el
-- correo existe o no y devolver una respuesta booleana.
*/
@Injectable()
@ValidatorConstraint({ name: 'isEmailUserAlreadyExist', async: true })
export class IsEmailUserAlreadyExistsConstraint implements ValidatorConstraintInterface {
    constructor(protected readonly userService: UserService) {}

    async validate(text: string) {
        return !(await this.userService.userExists({ email: text }));
    }
}

/*
-- Justo como se encuentra el validaro de arriba, este ya podria ser
-- usado normalmente con la anotacion @Validate pero para este caso
-- deseamos registrar la clase como un decorador para poder usarlo.

-- Para eso exportamos una funcion con el nombre que tendra el
-- decorador. Esta funcion recibe las validationOptions, las cuales
-- son los parametros que puede o no recibir un decorador, como lo son
-- { message: '', each: true } etc.

-- Esta funcion debe retornar otra funcion, la cual es la que registra
-- a la clase como un decorador. Los parametros de esta funcion seran
-- los mismos que se definen en el ejemplo de abajo.
*/
export function IsEmailUserAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsEmailUserAlreadyExistsConstraint,
        });
    }
}

/*
-- NOTA: A parte de registrar el decorador, este de debe agregar al
-- array de providers para que sea conocido por contexto de NestJS
*/
providers: [UserService, IsEmailUserAlreadyExistsConstraint]

/*
-- Finalmente, podemos usar el decorador que aplica la validacion, y
-- podemos enviar parametros(validationOptions) de manera normal como
-- con cualquier decorador de validacion
*/
export class UserEntity {
    @IsEmailUserAlreadyExist({ message: 'El email ya se encuentra registrado'})
    readonly email: string;
}


//?-------------------------------------------------------------
//?     VALIDAR SI UN EMAIL SI EXISTE
//?-------------------------------------------------------------
//?-------------------------------------------------------------
//?     CUSTOM VALIDATOR
//?-------------------------------------------------------------
@ValidatorConstraint({ async: true })
export class IsCustomerExists implements ValidatorConstraintInterface {
    constructor(private readonly userService: UserService) {}

    validate(email: string | undefined): boolean {
        return this.userService.findByEmail(email)
            .then((user) => {
                return user !== undefined;
            })
    }
}

export function CustomerExists(validationOptions?: ValidationOptions) {
    return function(object: object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsCustomerExists,
        });
    }
}