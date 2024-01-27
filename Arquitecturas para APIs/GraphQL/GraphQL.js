//? -----------------------------------------------------------
//?     GraphQL
//? -----------------------------------------------------------
/*
-- Lenguaje de consulta y manipulacion de datos para APIs. Permite
-- a los clientes especificar exactamente que datos necesitan, lo
-- que puede reducir la cantidad de datos transferidos.

-- USO: Util cuando los clientes necesitan solicitar datos
-- especificos y variados, optimizando las cargas de las solicitudes
-- y respuestas.
*/



//? -----------------------------------------------------------
//?     CONFIGURACION DE GraphQL
//? -----------------------------------------------------------
/*
-- Lo primero es instalar las dependencias necesarias para trabajar
-- con GraphQL y el cliente de Apollo, esto lo logramos con el
-- comando:
* npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

-- Una vez instaladas las dependencias, debemos agregar definir la
-- configuracion en el app.module de la aplicacion.
* nestjs-graphql-example
*/


//? -----------------------------------------------------------
//?     GENERAR RECURSOS DE GraphQL
//? -----------------------------------------------------------
/*
-- En GraphQL no se usan los metodos HTTP(GET, POST, PUT, etc), pero
-- si hay algo similar, son las 'queries' y las 'mutaciones'.

-- De igual forma, estos metodos no se mapean a traves de
-- controladores, en sus lugar se usan clases llamadas 'resolvers'

-- Para generar un resolver podemos usar el siguiente comando:
* nest generate resolver <resolver_name>
*/


//? -----------------------------------------------------------
//?     SCHEMAS EN GraphQL
//? -----------------------------------------------------------
/*
-- Para mapear recursos en GraphQL se utilizan los 'schemas' que son
-- algo similar a las entidades. Esta definicion de schemas se puede
-- hacer de 2 formas, las cuales son las siguientes:

? Code First
-- Significa que a traves de decoradores mapearemos clases de
-- TypeScript para convertirlas en schemas al generar archivos de
-- tipo .gql

-- Code First es mas recomendable usarlo cuando se esta usando
-- TypeScript y ademas un ORM que utiliza clases de TypeScript para
-- trabajar, ya que esto nos vendra muy bien.

? Schema First
-- Significa lo contrario de Code First, en este primero generamos
-- los schemas con extension .gql

-- Cada concepto tiene su propia configuracion en el GraphQLModule
*/


//? -----------------------------------------------------------
//?     PROBAR FUNCIONES DE LOS RESOLVERS DESDE EL NAVEGADOR
//? -----------------------------------------------------------
/*
-- GrapqQL nos proporciona una interfaz grafica en la que podemos
-- crear queries de GraphQL, podemos acceder a ella en la siguiente
-- direccion en nuestro navegador:
* http://localhost:3000/graphql
*/


//? -----------------------------------------------------------
//?     CONSULTAS EN GraphQL (@Query)
//? -----------------------------------------------------------
/*
-- Para ejecutar una Query, basta con usar la siguiente sintaxis:
*    {
*         posts {
*             id
*             title
*             content
*         }
*    }
*

-- Algo genial de GraphQL es que, en el caso de que solo querramos
-- propiedades especificas de la entidad, basta con definirlas en
-- la Query de GraphQL, de esta forma no es necesario crear una
-- nueva funcion, desde las Query y gracias al tipado de GraphQL es
-- que podemos hacerlo desde el cliente.
*/


//? -----------------------------------------------------------
//?     MUTACIONES EN GraphQL (@Mutation)
//? -----------------------------------------------------------
/*
-- Para ejecutar una Mutation se usa una sintaxis similar al llamado
-- de una funcion:

*     mutation {
*         createPost(post: {
*             title: 'My First Post',
*             content: 'This is my first post with GraphQL'
*         }) {
*             id
*             title
*             content
*         }
*     }

-- Como puedes observar, se llama como tal a la funcion definida en
-- el resolver. En el parametro se envian los valores que se esperan
-- en el decorador @Args, estos se envian entre llaves.

-- Y por ultimo se define que se espera que devuelva el resultado de
-- esta mutacion, donde tambien podemos definir queries segun nuestras
-- necesidades.
*/


//? -----------------------------------------------------------
//?     EJEMPLO DE PARAMS CON GraphQL (@Args)
//? -----------------------------------------------------------
/*
-- El equivalente al decorador @Param en GraphQL es @Args el mismo
-- que se puede usar como un @Body en una Mutation.

-- Usando este decorador tambien podemos recibir parametros para
-- un endpoint, por ejemplo, el clasico que busca una entidad en
-- base a su id:

*     {
*         post(id: 2) {
*             id
*             title
*             content
*         }
*     }

-- Este es un ejemplo de sintaxis para una @Query que usa parametros,
-- en este caso se llama a la funcion y se envian los parametros
-- como tal, de igual forma, podemos definir que propiedades de la
-- entidad son las que deseamos que sean devueltas.
*/


//? -----------------------------------------------------------
//?     GUARDAR UNA RELACION OneToMany/ManyToOne en GraphQL
//? -----------------------------------------------------------
/*
-- Para guardar una entidad que esta relacionado con otras, usamos
-- la siguiente sintaxis en GraphQL:

*     mutation {
*         createPost(postInput: {
*             title: "Third Post",
*             content: "Something new post",
*             authorId: 2
*         }) {
*             id
*             title
*             content
*             authorId
*         }
*     }

-- Como puedes ver, para establecer la relacione entre este Post
-- y un Author, basta con agregar la propiedad al DTO de la entidad
-- POST y posteriormente enviarla como parametro al llamar a la
-- funcion createPost.

-- De igul forma, podemos definir que datos deseamos que sean
-- devueltos como el resultado de esta mutacion.
*/