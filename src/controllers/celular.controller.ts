import { Request, Response } from 'express';
import celularService from '../services/celular.service';

const crear = async (req: Request, res: Response) => {
  try {
    const celular = await celularService.crearCelular(req.body);
    res.status(201).json(celular);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    res.status(400).json({ error: message });
  }
};

const obtenerTodos = async (req: Request, res: Response) => {
  try {
    const celulares = await celularService.obtenerTodos();
    res.json(celulares);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({ error: message });
  }
};

const obtenerPorId = async (req: Request, res: Response) => {
  try {
    const celular = await celularService.obtenerPorId(req.params.id);
    if (!celular) {
      return res.status(404).json({ error: 'Celular no encontrado' });
    }
    res.json(celular);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({ error: message });
  }
};

const actualizar = async (req: Request, res: Response) => {
  try {
    const celular = await celularService.actualizarCelular(req.params.id, req.body);
    if (!celular) {
      return res.status(404).json({ error: 'Celular no encontrado' });
    }
    res.json(celular);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    res.status(400).json({ error: message });
  }
};

const eliminar = async (req: Request, res: Response) => {
  try {
    const celular = await celularService.eliminarCelular(req.params.id);
    if (!celular) {
      return res.status(404).json({ error: 'Celular no encontrado' });
    }
    res.json({ message: 'Celular eliminado correctamente' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({ error: message });
  }
};

// Exportamos un objeto con todas las funciones
export default {
  crear,
  obtenerTodos,
  obtenerPorId,
  actualizar,
  eliminar
};