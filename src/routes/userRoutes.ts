import { Router } from "express";
import { updateLastActive } from "../middlewares/updateLastActive";
//Controllers
import UserController from "../controllers/UserController";
import { authenticate } from "../middlewares/authenticate";
import { validateDTO } from "../middlewares/validateDto";
import { UpdateProfileDTO } from "../dtos/user/UpdateProfileDTO";
import { isAdmin } from "../middlewares/isAdmin";

const router = Router();

//Routing de User
router.use(authenticate, updateLastActive);
router.get("/get-profile", UserController.getProfile);
router.put(
  "/update-profile",
  validateDTO(UpdateProfileDTO),
  UserController.updateProfile
);

//Para el rol de Admin
router.get("/", UserController.getUsers);

export default router;
