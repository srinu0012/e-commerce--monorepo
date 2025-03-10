import { Router } from "express";
import { GetAllCategories, GetAllProducts, GetProductsByCategoryController, getProductById } from "../controllers/productController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { addReviews, getReviewsByProductId } from "../controllers/reviewsController.js";



const router = Router()

router.get("/all", GetAllProducts)
router.get("/category-list", GetAllCategories)
router.get("/category/:category",GetProductsByCategoryController)
router.post("/review",authenticateUser,addReviews)
router.get("/:id",getProductById)
router.get("/review/:id",getReviewsByProductId)

export default router;