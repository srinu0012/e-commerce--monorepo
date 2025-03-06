import { Box, Slider, Typography } from "@mui/material";
// import { useState } from "react";
import { ActionStore } from "../../stores/actionsStore";

function SidebarRangeBar(){
    const priceRange = ActionStore((state)=>state.sideBarRange)
    const handlePriceChange = ActionStore((state)=>state.SetSidebarRange)
    console.log(priceRange)
   
//   const [priceRange, setPriceRange] = useState([0, 1000]);

//   // Handle price range change
//   const handlePriceChange = (event, newValue) => {
//     setPriceRange(newValue);
//   };

    return(<>
     <Box sx={{ marginTop: 2 }}>
            <Typography variant="subtitle2">Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              // valueLabelDisplay="auto"
              // valueLabelFormatter={(value) => `$${value}`}
              min={0}
              max={1000}
              step={10}
              sx={{ width: '100%' }}
              // valueLabelDisplay="auto"
              // valueLabelFormatter={(value) => `$${value}`}  // Format value as currency
            />
            <Typography variant="caption">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </Typography>
          </Box>
    </>)

}

export default SidebarRangeBar;