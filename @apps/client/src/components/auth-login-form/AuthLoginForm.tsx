import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { UserAuthStore } from "../../stores/authStore";
import { useAuth } from "../../hooks/use-auth/useAuthHook";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";
import { Cancel } from "@mui/icons-material";
import { ActionStore } from "../../stores/actionsStore";




function LoginForm({HandleLoginPopup}:{HandleLoginPopup:()=>void}) {
  const { login, error } = useAuth()
  const [Email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const GoToHome = usePageNavigation("")
  const GotoRegister = usePageNavigation("registerpage")
  const SetIsLoginFormOpen = ActionStore((state)=>state.SetIsLoginFormOpen)
  const userLogin = UserAuthStore((state) => state.userLogin);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await login(Email, password)
    if (data) {
      const { username, token, role }: { username: string, token: string, role: string } = data;
      userLogin(username, token, role)
      GoToHome()
    }
  };

  const handleRegister = ()=>{
    SetIsLoginFormOpen()
    GotoRegister()
  }

  return (
    <>
      <Box
        sx={{
          maxWidth: 400,
          margin: "auto",
          marginTop: 10,
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          background: "#fff"
        }}
      >
        <IconButton color="error" children={<Cancel/>} onClick={HandleLoginPopup} />
        <Typography variant="h5">Login</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>

        <Typography>
          Dont have account,
          <Button variant="text"
            onClick={handleRegister}>
            Register
          </Button>
        </Typography>
      </Box>
    </>
  );
}


export default LoginForm;