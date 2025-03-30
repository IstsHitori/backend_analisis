import { Router } from "express";
//DTO
import { validateDTO } from "../middlewares/validateDto";
import { CreateAccountDTO } from "../dtos/auth/CreateAccountDTO";
import { LoginDTO } from "../dtos/auth/LoginDTO";
//
//Controllers
import AuthController from "../controllers/AuthController";
//

const router = Router();

//Routing de Auth
router.post(
  "/register",
  validateDTO(CreateAccountDTO),
  AuthController.registerAccount
);
router.post("/login", validateDTO(LoginDTO), AuthController.login);

export default router;
