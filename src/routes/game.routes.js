import express from 'express';
import GameController from '../controllers/game.controller.js';

const gameRouter = express.Router();

// Rotas de Jogos

gameRouter.get('/', GameController.findAll);

gameRouter.post('/', GameController.create);

export default gameRouter;