import mongoose, { connection } from 'mongoose';

// Objeto para rastrear el estado de la conexión a la base de datos
const conn = {
  isConnected: false
};

// Función para conectar a la base de datos MongoDB
export async function connectDB() {
  // Si ya está conectado, no hacer nada
  if (conn.isConnected) return;

  // Intenta conectar a la base de datos utilizando la URL proporcionada en las variables de entorno
  const db = await mongoose.connect(process.env.URLMONGODB);

  // Imprime el nombre de la base de datos a la que se ha conectado
  console.log(db.connection.db.databaseName);

  // Actualiza el estado de la conexión en el objeto conn
  conn.isConnected = db.connections[0].readyState;
}

// Manejadores de eventos para la conexión de Mongoose
connection.on('connected', () => {
  console.log('Mongoose is connected');
});

connection.on('error', (err) => {
  console.log('Mongoose connection error', err);
});
