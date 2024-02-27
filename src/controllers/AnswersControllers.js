import Answers from "../models/Answer.js";

export default class AnswersController {
  static async create(req, res) {
    const body = req.body;
    try {
      const newAnswers = new Answers({ ...body });
      console.log(body);
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
      res.status(200).json({ rows: rows });
    } catch (error) {
      console.log(error.message);
      res.status(404).json({ message: error.message, error: true });
    }
  }
}
