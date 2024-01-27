# El Docker file basicamente son las instrucciones que se le dan a
# Docker para que de cierta forma instale y pueda ejecutar nuestra
# aplicacion en su contenedor de Linux

# Esta es la imagen que se usara como plantilla para la ejecucion
# de nuestra aplicacion, en este caso es una aplicacion de node y
# es por eso que usamos una imagen de node, y el 16 es la version
# de la imagen de node
FROM node:16

# Este es el directorio de Linux donde se almacenara nuestra app
# en la instancia de Linux de Docker, esto siempre se almacena en
# la carpeta /usr/src/... lo que sigue puede tener el nombre que
# querramos.

# Esto equivale a ejecutar un cd /usr/src/app donde los siguientes
# comandos/operaciones ocurriran dentro de esta carpeta

# Create app directory
WORKDIR /usr/src/app

# Esto indica que copie un archivo en la ruta de la carpeta
# en la que estamos. Recibe el nombre del archivo que va a copiar
# y la ruta donde se va a copiar.

# Por lo comun, se copia el package.json para poder instalar todas
# las dependencias del proyecto en el contenedor de Docker

# Install app dependencies
# A wildcard is to ensure both package.json AND package-lock,json are copied
# where available (npm@5+)
COPY package*.json ./

# Esto indica comandos que deben ser ejecutados cuando se levanta el
# contenedor, en este caso se ejecuta el npm install para instalar
# todas las dependencias del proyecto en el contenedor de Docker
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Aqui nuevamente estamos copiando archivos. Lo que establecemos es
# que se copien todos los archivos de la ruta raiz de este proyecto
# en la ruta raiz del contenedor, dado que, al igual que el package.json
# el proyecto necesita estos archivos para poder funcionar
# Bundle app source
COPY . .

# En esta parte establecemos en que puerto se va a ejecutar la
# aplicacion dentro del contenedor, este debe coincidir con el que
# estamos exponiendo en la aplicacion como tal
EXPOSE 3000

# Esta ultima parte establece el comando que se va a ejecutar para
# iniciar la aplicacion, es el mismo que se usa en el package.json
# como nodemon server.js | node server.js | npm run start:dev | etc
# cada parte del comando va separada en palabras por comillas
CMD [ "node", "server.js" ]