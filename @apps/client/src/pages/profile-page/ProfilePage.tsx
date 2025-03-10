import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function ProfilePage() {
  return (
    <>
    <Header />
    <Box sx={{ display: "flex" }}>
        <Sidebar />
        <h1>profiledata</h1>
    </Box>
    </>
  );
}

export default ProfilePage;
