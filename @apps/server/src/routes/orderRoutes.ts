import { Router } from "express";
import { addOrdersController, getOrdersByUserId } from "../controllers/ordersController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";


const router = Router()

router.post("/addorder",authenticateUser,addOrdersController)
router.get("/getorders",authenticateUser,getOrdersByUserId)

export default router;