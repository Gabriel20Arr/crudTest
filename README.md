## CRUD BÁSICO 🖐️<br/>

Este es un proyecto básico de CRUD (Crear, Leer, Actualizar, Eliminar) con funcionalidades adicionales. A continuación, se describen los pasos necesarios para ejecutar el proyecto en otro equipo.<br/>

# Pasos para Ejecutar el Proyecto<br/>
1- Clonar el Repositorio <br/>
2- git clone https://github.com/TuUsuario/crud-basico.git<br/>
3- Instalar Dependencias<br/>
4-npm install<br/>
5- Configurar el Entorno<br/>
 -Crear un archivo .env en el directorio raíz y configurar variables de entorno si es necesario. (URLMONGODB: "mongodb+srv://adminGabriel:qwertyuiop@cluster-crud-next.hkwr7zw.mongodb.net/DB_crud_test?retryWrites=true&w=majority")

6- Ejecutar en Modo de Desarrollo<br/>
-Entrar a la rama master
-git chekout master
 -npm run dev<br/>
 -Esto iniciará el servidor de desarrollo en http://localhost:3000.<br/>
7-Construir para Producción<br/>
 -npm run build<br/>
8- Ejecutar en Modo de Producción<br/>
 -npm start<br/>

# Comandos Utilizados<br/>
git clone: Clona el repositorio.<br/>
cd: Cambia al directorio del proyecto.<br/>
npm install: Instala las dependencias del proyecto.<br/>
npm run dev: Inicia el servidor de desarrollo.<br/>
npm run build: Construye la aplicación para producción.<br/>
npm start: Inicia la aplicación en modo de producción.<br/>

# Funcionalidades Adicionales
Eliminar: Se ha implementado la funcionalidad de eliminar registros.
Formulario de Agregar/Editar: Se incorporó un formulario para agregar y editar contenido.
Estilo con Tailwind CSS: Se utilizó la biblioteca de estilo Tailwind CSS para el diseño.
Backend con API: Se creó un backend básico que se conecta a una API.
Uso de Hooks: Se utilizan Hooks de React para gestionar el estado y el ciclo de vida.
Cálculos con Datos de la Tabla: Se implementó algún cálculo o promedio con los datos de la tabla.
Validación de Formularios: La validación de formularios se realiza con la librería 'validator'.

# Comentarios en el Código
El código ha sido comentado para explicar la lógica detrás de cada sección y facilitar la comprensión del mismo.

# Deploy del Proyecto
El proyecto se puede desplegar en plataformas como Vercel, Netlify, Heroku, entre otras. Configura la plataforma de tu elección siguiendo sus instrucciones específicas.
