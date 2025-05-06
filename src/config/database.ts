import mongoose from 'mongoose';
import env from './env';

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log('✅ Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error instanceof Error ? error.message : 'Error desconocido');
    process.exit(1);
  }
};

export default connectDB;