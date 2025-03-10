import { getUserByIdRepo } from "../repos/userRepo.js"



export const getUserByIdService =async (user_id:number) => {
    try {
        const result = await getUserByIdRepo(user_id)
        if(Object.keys(result).length > 0){
            return {status:201,data:result}
        }
        return {status:404,data:{message:"user not found"}}
    } catch (error:any) {
        throw new Error(error.message);
        
    }
}