import { Router } from "express";
import UserController from "../controllers/UserControllers.js";
const usersRoutes = Router();

usersRoutes
  .post("/register", UserController.create)
  .get("/users", UserController.findAll)
  .get("/find/user/name/:nome", UserController.findByName)
  .get("/find/user/email/:email", UserController.findByEmail);

export default usersRoutes;
