# TiendaOnline

Proyecto académico individual de Mateo Amangano para el Aprendizaje Autónomo 1 de Programación Orientada a Objetos 1 (UIDE). El paradigma del proyecto es **programación funcional**.

TiendaOnline planifica una tienda de comercio electrónico con dos módulos. **M1 Gestión de Usuarios** cubre el registro y el inicio de sesión. **M2 Catálogo de Productos** cubre la consulta pública, búsqueda y filtros, además de la administración de productos. El carrito, los pedidos, los pagos y los envíos quedan proyectados.

- [Planeación de la Etapa 1](docs/planeacion.pdf)


## Ejecutar las pruebas

Con Node.js 22 o posterior, abre una terminal en la raíz y ejecuta `npm test`. Las pruebas de la base inicial usan el módulo nativo `node:test` y se pueden ejecutar sin instalar paquetes.

| Ruta | Contenido |
| --- | --- |
| `src/usuarios.mjs` | Normalización de correos y detección de duplicados. |
| `src/catalogo.mjs` | Consulta del catálogo activo, validación de precio y desactivación inmutable. |
| `test/modulos.test.mjs` | Pruebas de las reglas de ambos módulos. |
| `docs/` | Planeación y guion. |

La etapa de desarrollo incorpora Express para las rutas HTTP, Zod para los esquemas de entrada y adaptadores para credenciales y persistencia. La base inicial ejecuta reglas del dominio con datos de prueba.

## Control de versiones

La rama `main` conserva los cambios verificados. Las ramas `feat/usuarios` y `feat/catalogo` se usarán para el desarrollo de cada módulo. Antes de integrar cambios se revisan los criterios de aceptación y se ejecuta `npm test`.
