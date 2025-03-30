import { Router } from "express";


//DTO
import { validateDTO } from "../middlewares/validateDto";

import { CreateRaffleDTO } from "../dtos/Auth.dto";
//

//Controllers
import AuthController from "../controllers/AuthController";
//

const router = Router();

router.post(
  "/register",
  validateDTO(CreateRaffleDTO),
  AuthController.registerAccount
);


export default router;
