import { Router } from "express";
import * as ProductsController from "../controllers/productController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import {
  addReviews,
  getReviewsByProductId,
} from "../controllers/reviewsController.js";

const router = Router();

router.get("/all", ProductsController.getAllProductsController);
router.get("/category-list", ProductsController.getAllCategoriesController);
router.get(
  "/category/:category",
  ProductsController.getProductsByCategoryController
);
router.post("/review", authenticateUser, addReviews);
router.get("/:id", ProductsController.getProductByIdController);
router.get("/review/:id", getReviewsByProductId);

export default router;
