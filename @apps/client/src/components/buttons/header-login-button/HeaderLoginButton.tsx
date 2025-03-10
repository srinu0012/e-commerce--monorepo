import { Login } from "@mui/icons-material";
import { Box, Button, Modal, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { ActionStore } from "../../../stores/actionsStore";
import LoginForm from "../../auth-login-form/AuthLoginForm";
// import LoginFormfrom "../../auth-login-form/AuthLoginForm";


function HeaderLoginButton() {
  // const [isLoginOpen,SetIsLoginOpen]=useState<boolean>(false)
  const SetIsLoginOpen = ActionStore((state)=>state.SetIsLoginFormOpen)
  const isLoginOpen =ActionStore((state)=>state.isLoginFormOpen)

const HandleLoginPopup= ()=>{
  SetIsLoginOpen()
}

  return (
    <>
      <Box>
        <Tooltip title="Login" arrow>
          <Button
            startIcon={<Login />}
            onClick={HandleLoginPopup}
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 10,
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Login
          </Button>
        </Tooltip>
      </Box>
      <Modal
        open={isLoginOpen}
        onClose={SetIsLoginOpen}>
          <>
          <LoginForm HandleLoginPopup={SetIsLoginOpen}/>
          </>

      </Modal>
    </>
  );
}

export default React.memo(HeaderLoginButton);
