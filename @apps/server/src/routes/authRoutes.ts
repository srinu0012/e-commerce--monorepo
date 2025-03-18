import { Router } from "express";
import {
  getUserData,
  loginUser,
  registerNewUserController,
} from "../controllers/authController.js";
import { registerValidation } from "../middlewares/registerValdationMiddleware.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", registerNewUserController);
router.post("/login", loginUser);
router.get("/user", authenticateUser, getUserData);

export default router;
