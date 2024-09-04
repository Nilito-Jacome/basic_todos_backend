const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

const createDatabase = async () => {
  try {
    await client.connect();
    console.log('Conectado a PostgreSQL');

    // Intentar crear la base de datos
    const databaseName = process.env.DB_DATABASE;
    await client.query(`CREATE DATABASE ${databaseName}`);
    console.log(`Base de datos ${databaseName} creada correctamente`);
  } catch (error) {
    if (error.code === '42P04') {
      // La base de datos ya existe
      console.log('La base de datos ya existe');
    } else {
      console.error('Error al crear la base de datos:', error);
    }
  } finally {
    await client.end();
  }
};

createDatabase();
