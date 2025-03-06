import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import FilterProducts from "../../components/filter-products/FilterProducts";
import { Box } from "@mui/material";

export default function CategoryPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <FilterProducts />
      </Box>
    </>
  );
}
