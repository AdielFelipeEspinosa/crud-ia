// db.js

const { Pool } = require('pg'); // Importa el cliente de PostgreSQL
require('dotenv').config(); // Carga variables desde .env (opcional pero recomendable)

// Configuración del pool de conexión a la base de datos PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'ia-crud',
    port: process.env.DB_PORT || 5432,
    max: 10, // número máximo de conexiones simultáneas
    idleTimeoutMillis: 30000, // tiempo de inactividad antes de cerrar una conexión
});

// Log para confirmar la conexión
pool.connect()
    .then(() => console.log('✅ Conectado a la base de datos PostgreSQL'))
    .catch(err => console.error('❌ Error de conexión a PostgreSQL:', err.message));

// Exportar el pool para ser usado en los controladores
module.exports = pool;
