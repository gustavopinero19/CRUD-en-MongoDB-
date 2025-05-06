import mongoose from 'mongoose';
import { crearCelular, obtenerTodos } from './celular.controller';
import { connectDB } from './database';

const main = async () => {
  await connectDB();
  await crearCelular({ marca: 'Samsung', modelo: 'S22', precio: 800000, stock: 55 });
  const todos = await obtenerTodos();
  console.log(todos);
  mongoose.disconnect();
};

main();
