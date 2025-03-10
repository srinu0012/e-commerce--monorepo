import { Box} from "@mui/material";
import Header from "../../components/header/Header";
import UserOrders from "../../components/user-orders/UserOrders";
import Sidebar from "../../components/sidebar/Sidebar";


export default function UserOrdersPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <UserOrders />
      </Box>
    </>
  );
}
