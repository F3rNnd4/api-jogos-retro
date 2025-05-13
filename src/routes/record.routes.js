import express from 'express';
import RecordController from '../controllers/record.controller.js';

const recordRouter = express.Router();

// Rotas de Jogos

recordRouter.get('/', RecordController.findAll);
recordRouter.post('/', RecordController.create);

export default recordRouter;