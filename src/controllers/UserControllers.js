import User from "../models/User.js";

export default class UserController {
  static async create(req, res) {
    const body = req.body;
    try {
      const newUser = new User({ ...body });
      console.log(body);
      await newUser.create();
      res.status(201).json({ message: "created!" });
    } catch (error) {
      console.log(error.message);
      res.status(400).json({
        message: error.message,
        error: true,
      });
    }
  }
  static async findAll(req, res) {
    try {
      const rows = await User.findAll();
      res
        .status(200)
        .json({ result: { countUsers: rows.allUsers.length, rows } });
    } catch (error) {
      res.status(404).json({ message: error.message, error: true });
    }
  }
  static async findByEmail(req, res) {
    try {
      const email = req.params.email;

      const filter = await User.findOne(email, "email");
      console.log(filter);
      if (filter.result.length === 0) {
        return res.status(404).json({
          message: "Email não encotrado",
          countUsers: 0,
        });
      }
      return res.status(200).json({
        user: filter,
      });
    } catch (error) {
      res.status(400).json({ message: error.message, error: true });
    }
  }
  static async findByName(req, res) {
    try {
      const nome = req.params.nome;

      const filter = await User.findOne(nome, "nome");
      return res.status(200).json({
        user: filter,
      });
    } catch (error) {
      res.status(400).json({ message: error.message, error: true });
    }
  }
}
