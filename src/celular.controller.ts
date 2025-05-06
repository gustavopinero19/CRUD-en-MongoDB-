import { Celular } from './celular.model';

export const crearCelular = async (data: any) => {
  const nuevo = new Celular(data);
  return await nuevo.save();
};

export const obtenerTodos = async () => await Celular.find();
export const obtenerPorId = async (id: string) => await Celular.findById(id);
export const actualizarCelular = async (id: string, data: any) => await Celular.findByIdAndUpdate(id, data, { new: true });
export const eliminarCelular = async (id: string) => await Celular.findByIdAndDelete(id);
