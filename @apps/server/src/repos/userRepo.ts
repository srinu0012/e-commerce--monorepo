import { query } from "../utils/queryHelper.js";

export const createUser = async (username: string, email: string, password: string) => {

    const result = await query(`insert into users 
    (username,email,password) values($1,$2,$3)`, [username, email, password])
    return result
}

export const getUserByEmail = async (email: string) => {
    const result = await query(`select * from users where email = $1 or mobile_number = $1`, [email])
    return result.rows[0]
}