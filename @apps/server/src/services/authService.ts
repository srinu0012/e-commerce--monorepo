import { createUserRepo, getUserByEmailRepo } from "../repos/userRepo.js";
import { comparePassword, hashPassword } from "../utils/bcyrptHelper.js";
import { generateToken } from "../utils/jwtHelper.js";
import { userDataType } from "../repos/userRepo.js";

type sendingDataType = {
  id: number;
  username: string;
  role: string;
  token: string;
};

// export const registerUserService = async (
//   userData
// ) => {
//   const userExist = await getUserByEmailRepo(email, mobileNumber);
//   if (userExist) {
//     return userExist;
//   } else {
//     const hashedPassword = await hashPassword(password);
//     const userData:createUserDataType = {
//       username,
//       email,
//       hashedPassword,
//       mobileNumber,
//       address,
//     };
//     const newUser = await createUserRepo(userData);
//     const token = await generateToken(newUser.id, newUser.user_role);
//     newUser["token"] = token;
//     return { status: 200, data: newUser };
//   }
// };

export const registerNewUserService = async (userData: userDataType) => {
  const userExist = await getUserByEmailRepo(
    userData.email,
    userData.mobileNumber
  );
  if (userExist) {
    return userExist;
  }
  return userExist
};

export const loginService = async (emailOrMobie: string, password: string) => {
  const userExist = await getUserByEmailRepo(emailOrMobie, emailOrMobie);

  if (!userExist) {
    return { status: 401, message: { message: "user not found" } };
  }

  const validPassword = await comparePassword(password, userExist.password);

  if (!validPassword) {
    return { status: 401, message: { message: "invalid credentials" } };
  }

  const token = await generateToken(userExist.id, userExist.user_role);

  const sendingData: sendingDataType = {
    id: userExist.id,
    username: userExist.username,
    role: userExist.user_role,
    token: token,
  };
  return { status: 200, message: sendingData };
};
