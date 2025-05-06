import { Router } from 'express';
import celularController from '../controllers/celular.controller';

const router = Router();

router.post('/', celularController.crear);
router.get('/', celularController.obtenerTodos);
router.get('/:id', celularController.obtenerPorId);
router.put('/:id', celularController.actualizar);
router.delete('/:id', celularController.eliminar);

export default router;