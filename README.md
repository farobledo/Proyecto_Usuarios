Prueba de capacidades técnicas
para Desarrollo Frontend

🎓 Conocimientos y habilidades requeridas
Podrás realizar la prueba con facilidad si tienes los siguientes conocimientos y
habilidades.
Experiencia en maquetación web desde especificaciones de diseño

Conocimientos intermedios de lenguaje de programación JavaScript
Comodidad con programación orientada a objetos
Fundamentos de patrones de diseño
Conocimientos de API RESTFul
Habilidad para crear Web Components
Conocimientos de tecnologías y lenguajes web
Habilidades básicas con la interfaz de línea de comandos
Buena comprensión de lectura en Inglés
💻 ¿En qué consiste la prueba?
Queremos que construyas una aplicación web que administra usuarios de una
plataforma. Debes construir la aplicación usando las especificaciones técnicas de
diseño entregadas y construir unas funcionalidades que permitan administrar los
usuarios entregados por API.
Diseño y Frontend
Especificaciones de diseño:
https://www.figma.com/file/zgNJC7EakFXqMuBZsRRh5k/Test-Frontend

i Para poder visualizar los detalles técnicos es necesario que te registrese y/o
inicies sesión en la plataforma.

Debes construir el diseño manualmente usando HTML, CSS (Sass, Stylus, etc) y
JavaScript sin ayuda de frameworks CSS. El resultado debe ser lo más sencillo posible.
Funcionalidad
La aplicación consta de un dashboard con autenticación (mock) y una tabla de
Usuarios.

Los datos para llenar la tabla deben obtenerse de un API
(https://jsonplaceholder.typicode.com/users).
Requerimientos funcionales
1. Login
Solo se debe poder acceder al dashboard si un usuario ha iniciado sesión con
anterioridad.
Para fines de la prueba no es necesario que se realice la autenticación contra
un servidor, ésta se puede hacer con cualquier usuario y contraseña.
Si ya se ha iniciado sesión el login debe saltarse y la aplicación debe llevar
directamente al dashboard.
2. Crear usuario
3. De cada usuario debe mostrarse:
Id
Nombre
Apellido
Email
Dirección completa
Compañía
4. Mostrar to-do’s de usuarios:
Cada usuario tendrá un link o un botón que permita ver los to-do’s que tiene
asignados, éstos se obtienen haciendo un llamado adicional a la API con el id
del usuario: (https://jsonplaceholder.typicode.com/todos?userId={ID}).
Los to-do’s deben mostrarse en una ruta de Vue diferente (/users/{id}/todos). La
visualización de estos to-do’s puede ser una tabla nueva o cualquier
componente a tu criterio.
5. Marcar to-do como hecho.
6. Agregar nuevo to-do.

Prueba de capacidades técnicas para Desarrollo Frontend 5
7. Eliminar to-do

💡 Puedes crear las vistas adicionales que consideres necesarias
siguiendo los lineamientos del diseño.
