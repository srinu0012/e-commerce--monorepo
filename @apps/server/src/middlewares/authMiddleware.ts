import { NextFunction, Request, Response } from "express";
import { tokenVerification } from "../utils/jwtHelper.js";
import { JwtPayload } from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token is required" });
    return;
  }
  try {
    const decoded: JwtPayload | string = await tokenVerification(token);
    if (typeof decoded === "string") {
      return;
    }
    if (decoded.role != "user") {
      res.status(405).json({ message: "no access" });
      return;
    }
    req.body.user_id = decoded.id;
    next();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const authenticateAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Token is required" });
    return;
  }
  try {
    const decoded: JwtPayload | string = await tokenVerification(token);
    if (typeof decoded === "string") {
      return;
    }
    if (decoded.role != "admin") {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "no access" });
      return;
    }
    req.body.user_id = decoded.id;
    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
