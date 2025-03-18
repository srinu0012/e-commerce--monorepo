import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (err) {
    throw new Error("error in hashing password");
  }
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error("error in comparing password ");
  }
};
