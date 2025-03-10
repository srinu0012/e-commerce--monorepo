import { query } from "../utils/queryHelper.js";

export const createUserRepo = async (username: string, email: string, password: string,mobile_number:string,address:string) => {
    try {
        if (!username || !email || !password) {
            throw new Error('Missing required fields: username, email, or password');
        }
        const querystring = `
        INSERT INTO users (username, email, password,mobile_number,address) 
        VALUES ($1, $2, $3,$4,$5) 
        RETURNING id, username, email,user_role`;
        const result = await query(querystring, [username, email, password,mobile_number,address]);

        if (result.rows.length === 0) {
            throw new Error('Failed to create user');
        }
        return result.rows[0];
    } catch (error) {
        throw new Error('Internal server error');
    }
};

export const getUserByEmailRepo = async (email: string,Mobile:string) => {
    try {
        const result = await query("select * from users where email = $1 or mobile_number = $2", [email,Mobile])
        return result.rows[0]
    } catch (error) {
        throw new Error('Internal server error');
    }
}

export const getUserByIdRepo =async (user_id:number) => {
    try {
        const result = await query("select username,email,mobile_number,address from users where id = $1",[user_id])
        return result.rows[0]
    } catch (error:any) {       
        throw new Error('Internal server error');
    }
}


