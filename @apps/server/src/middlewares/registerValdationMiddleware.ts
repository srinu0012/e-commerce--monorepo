import { Request, Response, NextFunction } from "express";
import { validateEmail, validatePassword } from "../utils/validationHelpers.js";


export const registerValidation = (req: Request, res: Response, next: NextFunction): void => {
  const { username, email, password,mobile_number } = req.body;

  if (!username || username.length < 3) {
    res.status(400).json({ message: "Username must be at least 3 characters long" });
  } else if (!email || !validateEmail(email)) {
    res.status(400).json({ message: "Please provide a valid email address" });
  } else if (!password ||!validatePassword(password)) {
    res.status(400).json({ message: "Password must be at least 6 characters long" });
  }else if(+(mobile_number.length)>10 || +(mobile_number.length)<10){
    res.status(400).json({message:"Invalid mobile number"})
  }
   else {
    next();
  }
};


