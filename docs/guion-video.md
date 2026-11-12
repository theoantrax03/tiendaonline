# Guion del video · TiendaOnline

**Mateo Amangano · Aprendizaje Autónomo 1 · Etapa 1**  
**Duración estimada: 2 min 25 s.** Graba tu voz mientras compartes pantalla. Lee los párrafos y usa las indicaciones entre corchetes para cambiar de vista.

### 0:00–0:20 · Presentación

[En pantalla: primera página del PDF.]

Hola, soy Mateo Amangano. Para el Aprendizaje Autónomo 1 elegí TiendaOnline, un sistema de gestión de comercio electrónico para una tienda pequeña. El trabajo es individual. En esta primera etapa definí el alcance, las reglas de los módulos y la forma en que voy a organizar el desarrollo.

### 0:20–0:58 · Objetivo y alcance

[En pantalla: tabla de funcionalidades de la página 1.]

El objetivo es centralizar las cuentas de los clientes y el catálogo de productos. El primer módulo se encarga del registro y el inicio de sesión. Una regla importante es que el mismo correo solo puede pertenecer a una cuenta. En el segundo módulo, los visitantes pueden buscar y filtrar productos. El administrador puede agregarlos, editarlos o desactivarlos. Por ejemplo, si se desactiva una camisa Oxford, deja de aparecer en la búsqueda y su registro se conserva. El carrito, los pedidos, los pagos y los envíos están previstos para una etapa posterior.

### 0:58–1:37 · Programación funcional y paquetes

[En pantalla: ejemplo de la página 2.]

La regla de desactivar un producto recibe la lista y el identificador. Con la función map se genera una lista nueva y se copia el producto que cambia, así la lista original se conserva. También se pueden combinar dos filtros: primero se toman los productos activos y después se aplica la búsqueda. Estas funciones se pueden probar con datos de ejemplo. Para la etapa de desarrollo, Express se usará en las rutas y Zod para validar los datos que ingresan. La lectura y la escritura se manejarán fuera de estas funciones.

### 1:37–2:15 · Organización y repositorio

[En pantalla: cronograma de la página 3, luego README del repositorio.]

Organicé el trabajo en dos días. El primero se dedica al alcance, el diseño y la preparación del repositorio. El segundo, a revisar los criterios de aceptación y preparar la entrega. Como trabajo solo, asumo el análisis, el diseño, las pruebas y la documentación. En el repositorio está el README, el PDF de la planeación y una base en JavaScript que permite ejecutar pruebas de las reglas de usuarios y catálogo.

### 2:15–2:25 · Cierre

[En pantalla: el README o la portada del PDF.]

Con esta planeación queda definido qué se va a construir y cómo se verificará cada módulo. Gracias.

**Antes de subirlo.** Comprueba que el audio se escuche y que la tabla se lea al compartir la pantalla. Si GitHub sigue pendiente cuando grabes, di «En la base del repositorio están…» y muestra el README local.
