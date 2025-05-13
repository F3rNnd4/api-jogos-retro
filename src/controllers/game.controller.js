import GameModel from "../models/game.model.js";

class GameController {
  // GET /game
  async findAll(req, res) {
    try {
      const games = await GameModel.findAll();

      return res.status(200).json(games);
    } catch (error) {
      console.error("Error finding all games!", error);
      return res
        .status(500)
        .json({ message: "Error finding all games!", error });
    }
  }

  // POST /game
  async create(req, res) {
    try {
      const { name, platform } = req.body;

      // Validação básica
      if (!name || !platform) {
        return res
          .status(400)
          .json({ error: "Name and platform fields are required!" });
      }

      const data = {
        name,
        platform,
      };

      const newGame = await GameModel.create(data);

      return res.status(201).json({
        message: "New game created successfully!",
        newGame
      });

    } catch (error) {
      console.error("Error creating new game!", error);
      res.status(500).json({ message: "Error creating new game!", error});
    }
  }
}

export default new GameController();
