

import pool from "../config/db.js";

export const query=async (text:string,para?:any[] )=>{
    const data=await pool.query(text,para)
    return data
}