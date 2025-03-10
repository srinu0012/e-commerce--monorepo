import { Search as SearchIcon } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { ActionStore } from "../../stores/actionsStore";
import { useCallback } from "react";

export function HeaderSearchBar() {
  const SetSearchBarText = ActionStore((state)=>state.SetSearchBarText)

  const handleText = useCallback((e: { target: { value: string; }; })=>{
      SetSearchBarText(e.target.value)
  },[])


  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          onChange={handleText}
          sx={{
            background: "#fff",
            borderRadius: 10,
            maxWidth: "500px",
            width: "100%",
          }}
          placeholder="search products"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon sx={{ color: "#777" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}
