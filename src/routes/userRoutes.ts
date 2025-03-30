import { Router } from "express";

//Controllers
import UserController from "../controllers/UserController";
import { authenticate } from "../middlewares/authenticate";
import { validateDTO } from "../middlewares/validateDto";
import { UpdateProfileDTO } from "../dtos/user/UpdateProfileDTO";

const router = Router();

//Routing de User
router.use(authenticate);
router.get("/get-profile", UserController.getProfile);
router.put(
  "/update-profile",
  validateDTO(UpdateProfileDTO),
  UserController.updateProfile
);

export default router;
