import Answers from "../models/Answer.js";

export default class AnswersController {
  static async create(req, res) {
    try {
      const body = req.body;
      const newAnswers = new Answers({ ...body });
      await newAnswers.create();
      res.status(201).json({ message: "created" });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  }
  static async findAll(req, res) {
    try {
      const rows = await Answers.findAll();
      req.status(200).json({ rows: rows });
    } catch (error) {
      res.status(404).json({ message: error.message, error: true });
    }
  }
}
