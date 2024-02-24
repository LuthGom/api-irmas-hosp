import { Router } from "express";
import AnswersController from "../controllers/AnswersControllers.js";

const answersRoutes = Router();

answersRoutes
  .post("/answers", AnswersController.create)
  .get("/answers", AnswersController.findAll);

export default answersRoutes;
