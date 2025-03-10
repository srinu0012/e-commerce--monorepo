import { createUserRepo, getUserByEmailRepo } from "../repos/userRepo.js";
import { comparePassword, hashPassword } from "../utils/bcyrptHelper.js";
import { generateToken } from "../utils/jwtHelper.js";

type sendingDataType = {
    id: number;
    username: string;
    role: string;
    token: string;
}


export const registerUserService = async (username: string, email: string, password: string,mobile_number:string,address:string) => {
    const userExist = await getUserByEmailRepo(email,mobile_number)
    if (userExist) {
        return { status: 400, data:{message: "user already existed" }};
    }else {
        const hashedPassword = await hashPassword(password)
        const newUser = await createUserRepo(username, email, hashedPassword,mobile_number,address);
        const token = await generateToken(newUser.id, newUser.user_role)
        newUser["token"] = token
        return { status: 200, data: newUser };
    }
}

export const loginService = async (emailOrMobie: string, password: string) => {
    const userExist = await getUserByEmailRepo(emailOrMobie,emailOrMobie)
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

