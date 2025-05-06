import express from 'express';
import connectDB from './config/database';
import celularRoutes from './routes/celular.routes';
import env from './config/env';

const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api/celulares', celularRoutes);

// Iniciar servidor con manejo de error de puerto
const startServer = async () => {
  await connectDB();
  
  const server = app.listen(env.PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${env.PORT}`);
  });

  server.on('error', (error: NodeJS.ErrnoException) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`⚠️  El puerto ${env.PORT} está en uso. Intenta con otro puerto.`);
      process.exit(1);
    }
    throw error;
  });
};

startServer();