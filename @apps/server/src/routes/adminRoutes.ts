import { Router } from "express";
import { authenticateAdmin } from "../middlewares/authMiddleware.js";
import { changeOrderStatus, getAallOrders } from "../controllers/adminController.js";

const router = Router()

router.get("/getallorders",authenticateAdmin,getAallOrders)
router.put("/changeorderstatus",authenticateAdmin,changeOrderStatus)

export default router;
