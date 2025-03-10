import api from "./api";
import { registerFormDataType } from "../types/registerUserType";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post(
      "/auth/login",
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error: any) {
    throw error.response
  }
}




export const registerUserService = async (formdata:registerFormDataType) =>{
  const {username,email,mobile_number,password,address}=formdata;
  try {
    const response = await api.post(
      "/auth/register",
      {
        username,
        email,
        mobile_number,
        password,
        address
      }
    );
    return response.data;
  } catch (error: any) {
    throw error.response.data
  }
}
