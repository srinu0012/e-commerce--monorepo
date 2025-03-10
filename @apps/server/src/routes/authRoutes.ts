import { Router } from "express";
import { getUserData, loginUser, registerUser } from "../controllers/authController.js";
import { registerValidation } from "../middlewares/registerValdationMiddleware.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";


const router = Router()

router.post("/register", registerValidation, registerUser)

router.post("/login",loginUser)
router.get("/user",authenticateUser ,getUserData)

export default router;