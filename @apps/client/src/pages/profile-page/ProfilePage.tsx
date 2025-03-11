import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileInfo from "../../components/profile-info/ProfileInfo";

function ProfilePage() {
  return (
    <>
    <Header />
    <Box sx={{ display: "flex" }}>
        <Sidebar />
        <ProfileInfo />
    </Box>
    </>
  );
}

export default ProfilePage;
