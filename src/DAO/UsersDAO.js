import { db } from "../config/dbConnection.js";

export default class UsersDAO {
  static async create(newUser) {
    return new Promise((resolve, reject) => {
      db.query(
        `INSERT INTO "Users" ("nome", "email", "contato")
              VALUES ($1, $2, $3);`,
        [newUser.nome, newUser.email, newUser.contato],
        (err, res) => {
          if (err) {
            console.log("erro:", err);

            reject({
              message: err.message,
              error: true,
            });
          } else return resolve(res.rows);
        }
      );
    });
  }
  static async findAll() {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM "Users"`, (err, res) => {
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
  static async findOne(filter, field) {
    const find = `SELECT * FROM "Users" WHERE "${field}"= $1`;
    return new Promise((resolve, reject) => {
      db.query(find, [filter], (err, res) => {
        if (err) {
          reject({
            message: err.message,
            error: true,
          });
        } else {
          resolve({
            result: res.rows,
            error: false,
          });
        }
      });
    });
  }
}
