import api from "./api";

type ordersType = {
  product_id: number;
  count: number;
};

export const addOrders = async (orders: ordersType[], token: string) => {
  try {
    const response = await api.post(
      "/orders/addorder",
      { orders },
      { headers: { authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOrdersByUserId = async (token: string) => {
  try {
    const response = await api.get("/orders/getorders", {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


export const getAllOrdersForAdminService = async (token:string)=>{
  try {
    const response =await api.get("admin/getallorders",{
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data
  } catch (error:any) {
    throw new Error(error.message)
  }
}


export const changeOrderStatusService =async (status:string,user_user_id:number,product_id:number,token:string) => {
  try {
    const response = await api.put("/admin/changeorderstatus",{
      status,
      user_user_id,
      product_id
    },{
      headers: { authorization: `Bearer ${token}` },
    })
    return response.data
  } catch (error:any) {
    console.log(error);
    
    throw new Error(error.message)
  }
}



