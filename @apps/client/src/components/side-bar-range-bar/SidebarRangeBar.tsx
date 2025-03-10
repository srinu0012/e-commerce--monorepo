import { Box, Slider, Typography } from "@mui/material";
import { ActionStore } from "../../stores/actionsStore";
import { useCallback } from "react";


function SidebarRangeBar(){
    const priceRange = ActionStore((state)=>state.sideBarRange)
    const SetSidebarRange = ActionStore((state)=>state.SetSidebarRange)
    const handlePriceChange = useCallback((e: any,newValue: number[])=>{
        SetSidebarRange(newValue)
    },[])
    
    return(<>
     <Box sx={{ marginTop: 2 }}>
            <Typography variant="subtitle2">Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              min={0}
              max={1000}
              step={10}
              sx={{ width: '100%' }}
            />
            <Typography variant="caption">
              Price: ${priceRange[0]} - ${priceRange[1]}
            </Typography>
          </Box>
    </>)

}

export default SidebarRangeBar;