import RecordModel from "../models/record.model.js";

class RecordController {
  // GET /record
  async findAll(req, res) {
    try {
      const records = await RecordModel.findAll();

      return res.status(200).json(records);
    } catch (error) {
      console.error("Error finding all records!", error);
      return res
        .status(500)
        .json({ message: "Error finding all records!", error });
    }
  }

  // POST /game
  async create(req, res) {
    try {
      const { score, screenshot, userId, gameId } = req.body;

      // Validação básica
      if (!score || !screenshot || !userId || !gameId) {
        return res
          .status(400)
          .json({
            error: "Score, screenshot, userId and gameId fields are required!",
          });
      }

      const data = {
        score,
        screenshot,
        userId,
        gameId,
      };

      const newRecord = await RecordModel.create(data);

      return res.status(201).json({
        message: "New record created successfully!",
        newRecord
      });
    } catch (error) {
      console.error("Error creating new record!", error);
      res.status(500).json({ message: "Error creating new record!", error });
    }
  }
}

export default new RecordController();
