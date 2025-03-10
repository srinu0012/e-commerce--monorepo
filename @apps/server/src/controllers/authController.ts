import { Request, Response } from "express";
import { loginService, registerUserService } from "../services/authService.js";
import { getUserByIdService } from "../services/userService.js";

export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password,mobile_number,address } = req.body;
    try {
       const result =await registerUserService(username,email,password,mobile_number,address)
       res.status(result.status).json(result.data)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "internal server error from controller" })
    }
}

export const loginUser = async (req:Request,res:Response)=>{
    const {email,password}=req.body;
    try {
        const data=await loginService(email,password)
        res.status(data.status).json(data.message)
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}


export const getUserData =async (req:Request,res:Response) => {
    const {user_id} = req.body;
    try {
        const result = await getUserByIdService(user_id)
        res.status(result.status).json(result.data)
    } catch (error:any) {
        res.status(500).json({message:error.message})
    }
}


