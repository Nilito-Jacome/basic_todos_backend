# Backend de la Aplicación Todo List

Este es el backend para una aplicación de lista de tareas (todo list) construido con Node.js, Express, y Sequelize. Proporciona una API REST para crear, leer, actualizar y eliminar tareas.

## Estructura del Proyecto

backend/ 
 ├── src/ 
 │ ├── controllers/ 
 │ │ └── todos.controllers.js # Controladores para manejar la lógica de negocio 
 │ ├── models/ 
 │ │ └── todos.model.js # Modelo de datos para las tareas 
 │ ├── routes/ 
 │ │ └── todos.routes.js # Rutas para la API de tareas 
 │ ├── utils/ 
 │ │ └── database.js # Configuración y conexión a la base de datos 
 │ └── app.js # Configuración principal de la aplicación Express 
 ├── .env # Variables de entorno 
 ├── .env.example # Ejemplo de archivo .env 
 ├── .gitignore # Archivos y carpetas ignorados por Git 
 ├── createDatabase.js # Script para crear la base de datos 
 └── package.json # Información del proyecto y dependencias

 
## Instalación

1. Clona este repositorio:

   ```bash
   git clone <URL del repositorio>


2. Navega al directorio del proyecto:

    cd backend

3. Instala las dependencias:

    npm install

4. Configura las variables de entorno:

    . Copia .env.example a .env y ajusta las variables según sea necesario.

## Uso

1. Crear la base de datos:

    npm run create-db
    
2. Iniciar el servidor de desarrollo:

    npm run dev

3. Iniciar el servidor de producción:
    
    npm start

## Rutas de la API

    . POST /Todos: Crear una nueva tarea.
    . GET /: Obtener todas las tareas.
    . GET /todos/:id: Obtener una tarea por ID.
    . PUT /todos/:id: Actualizar una tarea por ID.
    . DELETE /todos/:id: Eliminar una tarea por ID.

## Variables de Entorno

Asegúrate de configurar las siguientes variables en el archivo .env:

    DB_HOST=localhost
    DB_DATABASE=todos_basic_db
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=1978
    PORT=8000

## Dependencias

    axios: Para hacer solicitudes HTTP.
    cors: Para manejar solicitudes CORS.
    dotenv: Para cargar variables de entorno desde un archivo .env.
    express: Para construir la API REST.
    pg y pg-hstore: Para la conexión con PostgreSQL.
    sequelize: Para el ORM de la base de datos.
    nodemon: Para reiniciar el servidor automáticamente durante el desarrollo.

## Contribuciones

Si quieres contribuir al proyecto, por favor abre un issue o un pull request en el repositorio.

## Licencia

Este proyecto está bajo la licencia ISC.


