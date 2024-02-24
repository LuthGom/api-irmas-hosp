import UsersDAO from "../DAO/UsersDAO.js";

export default class User {
  constructor(newUser) {
    this.nome = newUser.nome;
    this.email = newUser.email;
    this.contato = newUser.contato;
  }

  async create() {
    const user = await User.findOne(this.email);
    console.log(await user);
    // if (user) {
    //   throw new Error("This email has already been registered!");
    // } else {
    return await UsersDAO.create(this);
    // }
  }

  static async findOne(filter, field) {
    const user = await UsersDAO.findOne(filter, field);
    if (!user) {
      return null;
    } else return user;
  }

  static async findAll() {
    return UsersDAO.findAll();
  }
}
