import api from "./api";

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
