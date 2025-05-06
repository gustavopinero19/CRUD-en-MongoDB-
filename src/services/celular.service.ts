import Celular, { ICelular } from '../models/celular.model';

class CelularService {
  async crearCelular(data: ICelular) {
    const nuevo = new Celular(data);
    return await nuevo.save();
  }

  async obtenerTodos() {
    return await Celular.find();
  }

  async obtenerPorId(id: string) {
    return await Celular.findById(id);
  }

  async actualizarCelular(id: string, data: Partial<ICelular>) {
    return await Celular.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminarCelular(id: string) {
    return await Celular.findByIdAndDelete(id);
  }
}

export default new CelularService();