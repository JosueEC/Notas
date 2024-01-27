//? -----------------------------------------------------------
//?     gRPC
//? -----------------------------------------------------------
/**
-- RPC (Remote Procedure Call): Es un protocolo de comunicacion
-- entre aplicaciones. gRPC es una implementacion que usa este
-- protocolo.

-- Este en usa PROTOCOL BUFFERS para la comunicacion, en escencia
-- es algo similar a JSON o XML. Cabe mencionar que los protobuffers
-- son mas rapidos que JSON

-- Desarrollado por Google. Utiliza HTTP/2 para la transmision.
-- Usa Protocol Buffers como lenguaje de interfaz y ofrece funciones
-- como autenticacion, balanceo de carga y verificacion.

-- USO: Ideal para microservicios y sistemas distribuidos donde
-- se necesita un rendimiento eficiente y una comunicacion rapida
-- entre servicios.
*/


//? -----------------------------------------------------------
//?     IMPLEMENTACION DE gRPC en NestJS
//? -----------------------------------------------------------
/*
-- Lo primero es instalar las dependencias necesarias para trabajar
-- con microservicios en NestJS y ademos comunicar los mismos con
-- gRPC. Para ello usamos el comando:
* npm install --save @nestjs/microservices @grpc/grpc-js @grpc/proto-loader ts-proto

? @nestjs/microservices:
-- Es el modulo para trabajar con microservicios en
-- NestJS.

? @grpc/grpc-js:
-- Es el modulo para usar gRPC como protocolo de comunicacion
-- entre microservicios con NestJS

?@grpc/proto-loader ts-proto:
-- Es el modulo que permite convertir codigo
-- de TypeScript en protobuffers, que es el formato de comunicacion
-- que usa gRPC
*/


//? -----------------------------------------------------------
//?     DEFINICION DEL ARCHIVO .proto PARA EL MICROSERVICIO
//? -----------------------------------------------------------
/*
-- El archivo .proto es el contiene toda la sintaxis para definir
-- el tipado de los objetos y las funciones con las cuales dispone
-- nuestro microservicio para comunicacion con gRPC.

-- Este archivo .proto puede ser convertido a algun otro codigo,
-- como puede ser TypeScript, Java, PHP, Go, etc.
-- Para ello usamos el siguiente comando:

? protoc
Herramienta CLI para ejecutar comandos de Protobuf

? --plugin=
-- Es un plugin con el cual podemos transformar archivos .proto a
-- codigo de typescript

? --ts_proto_out
-- Es la ruta donde se guardaran las conversiones de nuestros
-- archivos .proto a codigo de TypeScript

? --ts_proto_opt=nestJs=true
-- Bandera especifica para el uso de NestJS como framework

? -/proto/auth.proto
-- Ruta y nombre del archivo que se va a transformar

* protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/auth.proto
*/