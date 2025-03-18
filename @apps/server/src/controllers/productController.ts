import { Request, Response } from "express";
import {
  allProductsRepo,
  allProductsCountRepo,
  allCategoriesRepo,
  getProductsByCategoryRepo,
  getProductByIdRepo,
} from "../repos/productsRepo.js";

interface ProductQueryParams {
  limit: string;
  skip?: string;
  pricerange: string;
}

export const getAllProductsController = async (
  req: Request<{}, {}, {}, ProductQueryParams>,
  res: Response
) => {
  const { limit = "10", skip = "0", pricerange } = req.query;
  const pricerangeparse: number[] = JSON.parse(pricerange);
  try {
    const result = await allProductsRepo(
      limit,
      skip,
      pricerangeparse[0],
      pricerangeparse[1]
    );
    const total = await allProductsCountRepo();
    const data = { products: result, total: total, skip: skip, limit: limit };
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const getProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const Productdata = await getProductByIdRepo(id);
    res.send(Productdata);
  } catch (error) {}
};

export const getAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await allCategoriesRepo();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

export const getProductsByCategoryController = async (
  req: Request,
  res: Response
) => {
  const { category } = req.params;
  let result = await getProductsByCategoryRepo(category);
  res.status(200).json(result);
};
