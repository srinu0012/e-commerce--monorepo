import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { registerValidation } from "../middlewares/registerValdationMiddleware.js";

const router = Router()

router.post("/register", registerValidation, registerUser)

router.post("/login",loginUser)


export default router;