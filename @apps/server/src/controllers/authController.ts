import { Request, Response } from "express";
import { loginService, registerNewUserService} from "../services/authService.js";
import { getUserByIdService } from "../services/userService.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

// export const registerUser = async (req: Request, res: Response) => {
//   try {
//     const result = await registerUserService(req.body);
//     res.status(StatusCodes.OK).json(result.data);
//   } catch (error) {
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
//   }
// };

export const registerNewUserController = async (req:Request,res:Response) => {
    try {
        
        res.status(StatusCodes.OK).json(await registerNewUserService(req.body))
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:ReasonPhrases.INTERNAL_SERVER_ERROR})
    }
}

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const data = await loginService(email, password);
    res.status(data.status).json(data.message);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: ReasonPhrases.INTERNAL_SERVER_ERROR });
  }
};

export const getUserData = async (req: Request, res: Response) => {
  const { user_id } = req.body;
  try {
    const result = await getUserByIdService(user_id);
    res.status(result.status).json(result.data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
