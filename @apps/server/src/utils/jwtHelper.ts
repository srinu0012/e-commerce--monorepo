import jwt from "jsonwebtoken";
import { getJwtSecreatKey } from "../config/env.js";

export const generateToken = async (id: number, role: string) => {
  const payload = { id, role };
  return jwt.sign(payload, getJwtSecreatKey());
};

export const tokenVerification = async (token: string) => {
  return jwt.verify(token, getJwtSecreatKey());
};
