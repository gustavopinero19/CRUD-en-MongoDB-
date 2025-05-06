import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../../.env')
});

export default {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/celulares-db',
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development'
};