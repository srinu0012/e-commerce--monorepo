import { Box, Button } from "@mui/material";
import React from "react";
import { ActionStore } from "../../../stores/actionsStore";
import { ProductStore } from "../../../stores/moreProductsStore";

function ViewMoreButton({ handleNextItems }: { handleNextItems: () => void }) {
    const isViewMoreAble = ProductStore((state)=>state.isViewMoreAble)
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button variant="contained" onClick={handleNextItems} disabled={isViewMoreAble } >
          View More
        </Button>
      </Box>
    </>
  );
}

export default React.memo(ViewMoreButton);
