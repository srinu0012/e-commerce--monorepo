import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { UserAuthStore } from "../../stores/authStore";
import { useAuth } from "../../hooks/use-auth/useAuthHook";
import { usePageNavigation } from "../../hooks/page-navigation-hook.ts/pageNavigation";


export default function LoginForm() {
  const { login, error } = useAuth()
  const GoToHome = usePageNavigation("")


  const [Email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
        }}
      >
        <Typography variant="h5">Login</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email/number"
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
      </Box>
    </>
  );
}
