import { Request, Response } from "express"
import { AllProducts, AllProductsCount, AllCategories, GetProductsByCategory, GetProductByIdRepo } from "../repos/productsRepo.js"

interface ProductQueryParams {
    limit: string;
    skip?: string;
    pricerange:string;
}


export const GetAllProducts = async (req: Request<{}, {}, {}, ProductQueryParams>, res: Response) => {
    const { limit = '10', skip = '0',pricerange } = req.query;
    const pricerangeparse:number[] = JSON.parse(pricerange)
    try {
        const result = await AllProducts(limit, skip,pricerangeparse[0],pricerangeparse[1])
        const total = await AllProductsCount()
        const data = { products: result, total: total, skip: skip, limit: limit }
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}


export const getProductById = async (req: Request, res: Response) => {
    const {id}=req.params;
    try {
        const Productdata = await GetProductByIdRepo(id);
        res.send(Productdata)
    } catch (error) {

    }
}


export const GetAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await AllCategories()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ message: "internal server error" })
    }
}

export const GetProductsByCategoryController = async (req: Request, res: Response) => {
    const { category } = req.params
    let result = await GetProductsByCategory(category)
    res.status(200).json(result)
}