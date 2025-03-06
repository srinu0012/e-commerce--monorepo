import { Request, Response } from "express";
import { loginService, registerUserService } from "../services/authService.js";



export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
       const result =await registerUserService(username,email,password)
       res.status(result.status).json(result.message)
    } catch (error) {
        res.status(500).json({ error: "internal server error" })
    }
}


export const loginUser=async (req:Request,res:Response)=>{
    const {email,password}=req.body;
    try {
        const data=await loginService(email,password)
        res.status(data.status).json(data.message)
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}


