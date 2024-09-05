const express = require('express');
const db = require('../config/database');
const cors = require('cors');
require('dotenv').config();
const useRoutes = require('./routes/todos.routes');
const PORT = process.env.PORT;
const app = express();

const syncDatabase = async () => {
  try {
    // Conectar a la base de datos
    await db.authenticate();
    console.log('Base de datos conectada correctamente');

    // Sincronizar tablas
    await db.sync({ force: false }); // Cambia a `true` si necesitas recrear tablas cada vez
    console.log('Base de datos sincronizada correctamente');

  } catch (error) {
    console.error('Error al conectar o sincronizar la base de datos:', error);
  }
};

syncDatabase();

app.use(express.json());
app.use(cors());

app.use(useRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a mi servidor');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
