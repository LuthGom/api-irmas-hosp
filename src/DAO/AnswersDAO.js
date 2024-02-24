import { db } from "../config/dbConnection.js";

export default class AnswersDAO {
  static async create(newAnswers) {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO "Answers" ("p_aconhegante","p_abordagem","p_empatia","p_serOuvido", "p_alimentacao", "p_eq_assistencial", "p_eq_enfermagem", "p_eq_medica", "createdAt", "updatedAt", "usuario_id")
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,NOW(), NOW(), $9)`
      ),
        [
          newAnswers.p_aconhegante,
          newAnswers.p_abordagem,
          newAnswers.p_empatia,
          newAnswers.p_serOuvido,
          newAnswers.p_alimentacao,
          newAnswers.p_eq_assistencial,
          newAnswers.p_eq_enfermagem,
          newAnswers.p_eq_medica,
          newAnswers.usuario_id,
        ],
        (err, res) => {
          if (err) {
            reject({
              message: err.message,
              error: true,
            });
          } else return resolve(res.rouws);
        };
    });
  }
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM "Answers"`, (err, res) => {
        if (err) {
          reject({
            message: err.message,
            error: true,
          });
        } else {
          resolve({
            allUsers: res.rows,
            error: false,
          });
        }
      });
    });
  }
  static async findOne(fitler) {
    const find = `SELECT * FROM "Answers" WHERE usuario_id=$1`;
    return new Promise((resolve, reject) => {
      db.query(find, [find], (err, res) => {
        if (err) {
          reject({
            message: err.message,
            error: true,
          });
        } else {
          resolve({
            result: res.rows[0],
            error: false,
          });
        }
      });
    });
  }
}
