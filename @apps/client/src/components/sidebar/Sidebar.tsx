import { Box, Drawer } from "@mui/material";
import useMediaQueries from "../../themes/basic-theme/mediaQuires";
import { ActionStore } from "../../stores/actionsStore";
import CloseButton from "../buttons/close-button/CloseButton";
import CategoryList from "../category-list/CategoryList";
import SidebarNavigationContainer from "../sidebar-navigations/SidebarNavigations";
import SidebarRangeBar from "../side-bar-range-bar/SidebarRangeBar";

function Sidebar() {
  const Hamburger = ActionStore((state) => state.Hamburger);
  const MobileScreen = useMediaQueries();

  return (
    <>
      <Box sx={{ height: 100 }}>
        <Drawer
          variant={MobileScreen ? "temporary" : "permanent"}
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              padding: "20px",
              marginTop: MobileScreen ? 8 : 10,
            },
          }}
          open={Hamburger}
        >
          {MobileScreen && (
            <>
              <CloseButton />
              <SidebarNavigationContainer />
            </>
          )}
          <SidebarRangeBar />
          <CategoryList />
        </Drawer>
      </Box>
    </>
  );
}

export default Sidebar;
