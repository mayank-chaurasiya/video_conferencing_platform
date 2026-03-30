import React, { useContext, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import { Link as RouterLink } from "react-router-dom";
import "./Authentication.css";
import { AuthContext } from "../../contexts/AuthContext.jsx";

export const Authentication = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [formState, setFormState] = useState(0);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { handleRegister, handleLogin } = useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setUsername("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (error) {
      let message = error.response.data.message;
      setError(message);
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: "1",
          }}
        >
          <LockOpenOutlined />
        </Avatar>

        <Box
          component="form"
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="btns">
            <Button
              variant={formState === 0 ? "contained" : ""}
              onClick={() => {
                setFormState(0);
              }}
            >
              Sign In
            </Button>
            <Button
              variant={formState === 1 ? "contained" : ""}
              onClick={() => {
                setFormState(1);
              }}
            >
              Sign Up
            </Button>
          </div>

          {formState === 1 ? (
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Full Name"
              name="username"
              value={name}
              autoFocus
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <></>
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />

          <p style={{ color: "red" }}>{error}</p>

          <Button
            type="button"
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            onClick={handleAuth}
          >
            {formState === 0 ? "Sign In" : "Register"}
          </Button>
        </Box>
      </Paper>
      <Snackbar open={open} autoHideDuration={4000} message={message} />
    </Container>
  );
};
