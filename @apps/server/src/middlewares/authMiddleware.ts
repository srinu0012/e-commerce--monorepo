import { NextFunction, Request, Response } from "express";
import { tokenVerification } from "../utils/jwtHelper.js";
import { decode } from "punycode";


  

export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1];
   if(!token){
    res.status(401).json({message:"Token is required"})
    return;
   }

   try {
     const decoded =await tokenVerification(token)
    //  const decodeobj= JSON.parse(decoded)
     if(decoded.role != "user"){
        res.status(400).json({message:"no access"})
        return;
     }
     req.body.user_id = decoded.id
     next()
   } catch (error) {
    
   }


}