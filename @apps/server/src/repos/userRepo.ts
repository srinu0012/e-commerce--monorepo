import { query } from "../utils/queryHelper.js";

export type userDataType = {
  username: string;
  email: string;
  hashedPassword: string;
  mobileNumber: string;
  address: string;
};

export const createUserRepo = async (userData: userDataType) => {
  const { username, email, hashedPassword, mobileNumber, address } = userData;
  try {
    const querystring = `
        INSERT INTO users (username, email, password,mobile_number,address) 
        VALUES ($/username/, $/email/, $/hashedPassword/,$/mobileNumber/,$/address/) 
        RETURNING id, username, email,user_role`;
    const result = await query(querystring, [
      username,
      email,
      hashedPassword,
      mobileNumber,
      address,
    ]);
    if (result.rows.length === 0) {
      throw new Error("Failed to create user");
    }
    return result.rows[0];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserByEmailRepo = async (email: string, mobile: string) => {
  try {
    const result = await query(
      "select * from users where email = $/email/ or mobile_number = $/mobile/",
      [email, mobile]
    );
    return result.rows[0];
  } catch (error:any) {
    throw new Error(`${error.message}`);
  }
};

export const getUserByIdRepo = async (userId: number) => {
  try {
    const result = await query(
      "select username,email,mobile_number,address from users where id = $1",
      [userId]
    );
    return result.rows[0];
  } catch (error: any) {
    throw new Error("Internal server error");
  }
};
