import { Schema, model, Document } from 'mongoose';

export interface ICelular extends Document {
  marca: string;
  modelo: string;
  precio: number;
  stock: number;
  color?: string;
  fechaLanzamiento?: Date;
}

const CelularSchema = new Schema<ICelular>({
  marca: { 
    type: String, 
    required: [true, 'La marca es obligatoria'],
    trim: true
  },
  modelo: { 
    type: String, 
    required: [true, 'El modelo es obligatorio'],
    unique: true
  },
  precio: { 
    type: Number, 
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  stock: { 
    type: Number, 
    required: [true, 'El stock es obligatorio'],
    min: [0, 'El stock no puede ser negativo']
  },
  color: {
    type: String,
    default: 'Negro'
  },
  fechaLanzamiento: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});


const Celular = model<ICelular>('Celular', CelularSchema);
export default Celular;