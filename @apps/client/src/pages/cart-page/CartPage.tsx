import { Box } from "@mui/material";
import { CartContainer } from "../../components/cart-container/CartContainer";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function CartPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <CartContainer />
      </Box>
    </>
  );
}
