import api from "./api";
import { registerFormDataType } from "../types/registerUserType";
import { AxiosError } from "axios";
import { userType } from "../types/userDataType";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const registerUserService = async (formdata: registerFormDataType) => {
  const { username, email, mobile_number, password, address } = formdata;
  try {
    const response = await api.post("/auth/register", {
      username,
      email,
      mobile_number,
      password,
      address,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export const getUserDataService = async (
  token: string,
  SetUserData: (arg0: userType)=>void
) => {
  try {
    const response = await api.get("/auth/user", {
      headers: { authorization: `Bearer ${token}` },
    });
    SetUserData(response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
