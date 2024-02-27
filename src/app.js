import express from "express";
import cors from "cors";
import { createTables, db } from "./config/dbConnection.js";
import { routes } from "./routes/index.js";
const app = express();

app.use(express.json());
app.use(cors());

await db
  .connect()
  .then((conn) => {
    console.log("The db  connected succefully!");
    return conn;
  })
  .catch((err) => {
    console.log("The db connection failed!" + err);
    return err;
  });
db.query(createTables)
  .then((result) => {
    console.log("Tables created!");
    return result;
  })
  .catch((err) => {
    console.log(err);
    return err;
  });
app.use((req, res, next) => {
  next();
});

routes(app);
export default app;
