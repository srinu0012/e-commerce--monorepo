import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import { UserAuthStore } from "../../../stores/authStore";
import { usePageNavigation } from "../../../hooks/page-navigation-hook.ts/pageNavigation";

export default function LogoutButton() {
  const userLogout = UserAuthStore((state) => state.userLogout);
  const goToHome = usePageNavigation("");
  const handleLogout = () => {
    userLogout();
    goToHome();
  };

  return (
    <>
      <Button onClick={handleLogout} startIcon={<Logout />}>
        logout
      </Button>
    </>
  );
}
