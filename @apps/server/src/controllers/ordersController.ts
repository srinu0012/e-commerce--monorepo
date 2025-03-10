import { Request, Response } from "express";
import { addOrderRepo, getOrderByUserIdRepo } from "../repos/orderRepo.js";


export const addOrdersController = async (req:Request,res:Response)=>{
    const {user_id,orders}=req.body;  
    if(orders.length <= 0){
        res.status(400).json({message:"product data required"})
        return;
    }
    try {
        orders.map((val: { product_id: number; count: number; })=>addOrderRepo(user_id,val))
        res.status(200).json({message:"sucessfully added"})
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}

export const getOrdersByUserId = async (req:Request,res:Response)=>{
    const {user_id}=req.body;
    try { 
        const result = await getOrderByUserIdRepo(user_id)
        res.status(result.status).json(result.data)
    } catch (error:any) {
        res.status(500).json(error.message)
    }
}
