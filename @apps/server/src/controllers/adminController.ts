import { Request, Response } from "express";
import {
  changeOrderStatusService,
  getAallOrdersService,
} from "../services/orderService.js";

export const getAallOrders = async (req: Request, res: Response) => {
  try {
    const result = await getAallOrdersService();
    res.status(result.status).json(result.data);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const changeOrderStatus = async (req: Request, res: Response) => {
  const { status, user_user_id, product_id } = req.body;
  // throw new Error("something went wrong");
  try {
    const result = await changeOrderStatusService(
      status,
      product_id,
      user_user_id
    );
    res.status(result.status).json(result.data);
  } catch (error: any) {
    res.send(500).json({ message: error.message });
  }
};
