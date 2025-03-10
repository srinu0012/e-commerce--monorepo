import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js";

type decoded = {
    id:number;
    role:string
 }


export const generateToken=async (id:number,role:string)=>{
const payload={id,role}
const token =await jwt.sign(payload,SECRET_KEY!)
return token;
}

export const tokenVerification= async (token:string)=>{
    const decoded = jwt.verify(token,SECRET_KEY!)
    return decoded
}