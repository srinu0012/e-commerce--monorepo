import { Request, Response } from "express";
import { addReviewService } from "../services/reviewService.js";


export const addReviews = async (req:Request,res:Response)=>{
    const {rating,comment,product_id,user_id}=req.body;
    try {
        const result = await addReviewService(rating,comment,product_id,user_id);
        res.status(result.status).json(result.data)
    } catch (error) {
        res.status(400).json({message:"internal server error"})
    }

}