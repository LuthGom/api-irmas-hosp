import AnswersDAO from "../DAO/AnswersDAO.js";

export default class Answers {
  constructor(newAnswers) {
    this.p_aconhegante = newAnswers.p_aconhegante;
    this.abordagem = newAnswers.abordagem;
    this.p_serOuvido = newAnswers.p_serOuvido;
    this.alimentacao = newAnswers.abordagem;
    this.p_eq_assistencial = newAnswers.p_eq_assistencial;
    this.p_eq_enfermagem = newAnswers.p_eq_enfermagem;
    this.p_eq_medica = newAnswers.p_eq_medica;
    this.usuario_id = newAnswers.usuario_id;
  }

  async create() {
    const answers = AnswersDAO.create(this);
    return answers;
  }
  static async findAll() {
    return UsersDAO.findAll();
  }
}
