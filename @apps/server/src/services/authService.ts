import { createUser, getUserByEmail } from "../repos/userRepo.js";
import { comparePassword, hashPassword } from "../utils/bcyrptHelper.js";
import { generateToken } from "../utils/jwtHelper.js";

type sendingDataType = {
    id: number;
    username: string;
    role: string;
    token: string;
}


export const registerUserService = async (username: string, email: string, password: string) => {
    const userExist = await getUserByEmail(email)
    if (userExist) {
        return { status: 400, message: "user already existed" };
    } else {
        const hashedPassword = await hashPassword(password)
        const newUser = await createUser(username, email, hashedPassword);
        return { status: 200, message: "user register successfully" };
    }

}

export const loginService = async (email: string, password: string) => {

    const userExist = await getUserByEmail(email)
    if (!userExist) {
        return { status: 401, message: { message: "user not found" } }
    }
    const validPassword = await comparePassword(password, userExist.password)

    if (!validPassword) {
        return { status: 401, message: { message: "invalid credentials" } }
    }
    const token = await generateToken(userExist.id, userExist.user_role)

    const sendingData: sendingDataType = {
        id: userExist.id,
        username: userExist.username,
        role: userExist.user_role,
        token: token
    }
    return { status: 200, message: sendingData }
}

