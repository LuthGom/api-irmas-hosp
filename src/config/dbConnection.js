import pkg from "pg";
const { Client } = pkg;
const connectionVariables = {
  database: process.env.DEV_DB_NAME,
  username: process.env.DEV_DB_USER,
  password: process.env.DEV_DB_PASSWORD,
  host: process.env.DEV_DB_HOSTNAME,
  port: process.env.PORT,
};

export const db = new Client({
  database: connectionVariables.database,
  user: connectionVariables.username,
  password: connectionVariables.password,
  host: connectionVariables.host,
  port: connectionVariables.port,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const createTables = `

    CREATE TABLE IF NOT EXISTS "Users"(
        "id" SERIAL,
        "nome" varchar(55) NOT NULL,
        "email" varchar(55) NOT NULL UNIQUE,
        "contato" varchar(20) NOT NULL,
        PRIMARY KEY ("id")
    );

    CREATE TABLE IF NOT EXISTS "Answers" (
        "id" SERIAL,
        "p_aconchegante" INTEGER,
        "p_abordagem" INTEGER,
        "p_empatia" INTEGER,
        "p_serOuvido" INTEGER,
        "p_alimentacao" INTEGER,
        "p_eq_assistencial" INTEGER,
        "p_eq_enfermagem" INTEGER,
        "p_eq_medica" INTEGER,
        "createdAt" timestamp with time zone NOT NULL,
        "updatedAt" timestamp with time zone NOT NULL,
        "usuario_id" INTEGER,
        CONSTRAINT "answers_pkey" PRIMARY KEY ("id"),
        CONSTRAINT "FK_usuario_id" FOREIGN KEY ("usuario_id")
            REFERENCES "Users" ("id") MATCH SIMPLE
            ON UPDATE CASCADE
            ON DELETE CASCADE
    )

`;
