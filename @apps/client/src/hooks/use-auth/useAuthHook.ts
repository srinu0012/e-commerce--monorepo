import { useState } from "react";
import { loginUser } from "../../services/authService";
export const useAuth = () => {
  const [error, setError] = useState<string>("");
  const login = async (email: string, password: string) => {
    setError("");
    try {
      const response = await loginUser(email, password);
      return response;
    } catch (err: any) {
      setError(err.data.message);
    }
  };

  return { login, error };
};


