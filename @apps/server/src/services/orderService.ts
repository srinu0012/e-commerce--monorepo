import { changeOrderStatusRepo, getUserOrders } from "../repos/orderRepo.js";
import {ReasonPhrases} from "http-status-codes"

export const getAallOrdersService = async () => {
  try {
    const result = await getUserOrders();
    if (result.length === 0) {
      return { status: 204, data: { message: "no orders" } };
      // throw new Error(ReasonPhrases.NO_CONTENT)
    }
    return { status: 200, data: result };
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};

export const changeOrderStatusService = async (
  status: string,
  product_id: number,
  user_id: number
) => {
  try {
    const result = await changeOrderStatusRepo(status, product_id, user_id);
    return { status: 201, data: { message: "added sucessfully" } };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
