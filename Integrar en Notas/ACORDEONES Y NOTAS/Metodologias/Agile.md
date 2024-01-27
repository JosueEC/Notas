# **Metodologia Agile**

### **Principios de la Metdologia Agile**
1. Nuestra mayor prioridad es satisfacer al cliente mediante la entrega temprana y continua de software con valor.

2. Aceptamos que los requisitos cambien, incluso en etapas tardias del desarrollo. Los procesos Agiles aprovechan el cambio para proporcionar ventaja competitiva al cliente.

3. Entregamos software funcional frecuentemente, entre dos semanas y dos meses, con preferencia al periodo de tiempo mas corto posible.

4. Los responsables de negocio y los desarrolladores trabajamos juntos de forma cotidiana durante todo el proyecto.

5. Los procesos se desarrollan en torno a individuos motivados. Hay que darles el entorno y el apoyo que necesitan, y confiarles la ejecucion del trabajo.

6. El metodo mas eficiente y efectivo de comunicar informacion al equipo de desarrollo y entre sus miembros es la conversacion cara a cara.

7. El software funcionando es la medida principal de progreso.

8. Los procesos Agiles promueven el desarrollo sostenible. Los promotores, desarrolladores y usuarios debemos ser capaces de mantener un ritmo constante de forma indefinida.

9. La atencion continua a la excelencia tecnica y al buen diseño, mejora la agilidad.

10. La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial. "Work smarter, not hard".

11. Las mejores arquitecturas, requisitos y diseños emergen de equipos auto-organizados

12. A intervalos regulares el equipo reflexiona sobre como ser mas efectivo para a continuacion ajustar y perfeccionar su comportamiento en consecuencia.

NOTA: Agile es una estructura con principios que deberia cumplir una metodologia para considerarse Agile. Ejemplo: SCRUM es un marco de trabajo que se basa en los principios Agile

---
<br>

### **Marco de trabajo SCRUM:**

**Conceptos:**
1. Sprint:
    Es el que mayor espacio abarca y dentro del cual se encuentran los demas conceptos.
2. Sprint Planning:
    Aqui se definen las tareas que van a conformar el sprint, el Scrum master se asegura de que los colaboradores hayan comprendido el proposito.
3. Daily:
    Reunion que tiene una duracion maxima de 30 minutos y se da al inicio de la jornada, con el fin de informar sobre lo realizado el dia anterior y lo que se procedera a hacer ahora.
4. Sprint Review:
    Al final de cada sprint se da una valoracion y se realiza el feedback. En este evento se Scrum, se busca revisar el avance y los resultados obtenidos.
5. Retrospectiva del Sprint
    Despues de la revision de cada sprint, el equipo y el scrum master realizan un balance general de lo que ha sido el proceso, brindan conclusiones, recomendaciones y mejoras.

**Miembros de un equipo SCRUM:**
1. Scrum Master:
    Es aquel que se ocupa de que el equipo siga correctamente la guia de Scrum y quien elimina los impedimentos al progreso.
2. Product Owner:
    Es quien se asegura que lo construido por el equipo sea del mayor valor posible en cada Sprint. Es quien tiene contacto directo con los interesados o clientes y quien comunica al equipo los ajustes necesarios a realizar segun las necesidades que estos le indiquen.
3. Developers:
    Son los integrantes del equipo que crean el incremento Sprint. Para los developers no existe un set predeterminado de habilidades especificas ya que esto dependera del tipo de industria y producto que esten creando.

---
<br>

**Conceptos Importantes para aplicar SCRUM de forma correcta:**

1. Desde el primer sprint debe haber funcionalidades presentadas, es decir, el producto debe verse, ser util y entenderse desde el primer sprint.

---
<br>

### **User Stories:**
- Pieza minima de trabajo en un framework de trabajo agil
- A lo que se quiere llegar
- Expresada desde la perspectiva de software del usuario

### Metodo INVEST para la creacion de una User Story
- I de Independiente:
    Cada historia de usuario deberia poder desarrollarse de esta manera, sin crear una dependencia con otros parametros.
- N de Negociable:
    Si la historia es demasiado grande o tiene elementos de menos o de mas, se deberia poder negociar. La idea es que evolucione de manera dinamica, como hemos ya visto que evolucionan los productos en metodologias agiles.
- V de Valioso: 
    Este punto nos invita a pensar el para que de lo que proponemos en nuestra user story. ¿Para que quiero que el usuario haga esto? La respuesta es el valor que le estamos dando al usuario
- E de Estimar:
    Lo ideal es que la historia sea lo suficientemente clara para poder conocer su alcance y estimar los esfuerzos que nos demandara.
- S de Small:
    Para que podamos trabajar sobre una historia dentro de un sprint, el desafia es lograr la minima historia posible
- T de Test:
    Basicamente, que la historia se pueda probar.

### Sintaxis para la definicion de una User Story
Titulo de la historia

    Como <rol>

    Quiero <funcionalidad>

    Para <beneficio/valor>

Opcionalmente se pueden agregar los criterios de aceptacion, segun los cuales hay que **probar** la historia para asegurarse que esta desarrollada en forma correcta.

    Criterios de Aceptacion

    Escenario 1: <titulo del escenario>

    Dado <contexto>

    Cuando <evento>

    Entonces <resultado/comportamiento esperado>

---

    Escenario 2 <titulo del escenario>

    Dado <contexto>

    Cuando <evento>

    Entonces <resultado/comportamiento esperado>

### Ejemplos de User Stories bien definidas:

1. Desarrollo de productos:
    Como gerente de producto, quiero una manera en que los miembros del equipo puedan entender como las tareas individuales contribuyen a los objetivos comerciales mas amplios.

2. Experiencia del cliente:
    Como cliente recurrente, espero que mi informacion quede guardada para crear una experiencia de pago mas fluida.

3. Aplicacion movil:
    Como usuario frecuente de la aplicacion, quiero una forma de simplificar la informacion relevante de la manera mas rapida posible