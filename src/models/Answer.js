import AnswersDAO from "../DAO/AnswersDAO.js";

export default class Answers {
  constructor(newAnswers) {
    this.p_aconchegante = newAnswers.p_aconchegante;
    this.p_abordagem = newAnswers.p_abordagem;
    this.p_empatia = newAnswers.p_empatia;
    this.p_serOuvido = newAnswers.p_serOuvido;
    this.p_alimentacao = newAnswers.p_alimentacao;
    this.p_eq_assistencial = newAnswers.p_eq_assistencial;
    this.p_eq_enfermagem = newAnswers.p_eq_enfermagem;
    this.p_eq_medica = newAnswers.p_eq_medica;
    this.createdAt = newAnswers.createdAt;
    this.usuario_id = newAnswers.usuario_id;
  }

  async create() {
    return await AnswersDAO.create(this);
  }
  static async findAll() {
    return AnswersDAO.findAll();
  }
}
