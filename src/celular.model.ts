import mongoose from 'mongoose';

const celularSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const Celular = mongoose.model('Celular', celularSchema);
