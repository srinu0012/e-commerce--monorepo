import { Request, Response } from "express";
import { addReviewService } from "../services/reviewService.js";
import { getReviewsByIdRepo } from "../repos/reviewsRepo.js";

export const addReviews = async (req:Request,res:Response)=>{
    const {rating,comment,product_id,user_id}=req.body;
    try {
        const result = await addReviewService(rating,comment,product_id,user_id);
        res.status(result.status).json(result.data)
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

export const getReviewsByProductId =async (req:Request,res:Response) => {
    const {id} = req.params
    try {
        const result = await getReviewsByIdRepo(id); 
        res.status(result.status).json(result.data)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}