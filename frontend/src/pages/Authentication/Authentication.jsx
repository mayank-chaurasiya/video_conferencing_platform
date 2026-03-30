import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import { Link as RouterLink } from "react-router-dom";
import "./Authentication.css";

export const Authentication = () => {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [formState, setFormState] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [messages, setMessages] = useState();
  const [open, setOpen] = useState(false);
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
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            SIGN IN
          </Button>
        </Box>
        <Grid container justifyContent="space-evenly" sx={{ mt: 3 }}>
          <Grid item>
            <Link component={RouterLink} to="/register">
              New User?
            </Link>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar open={open} autoHideDuration={4000} message={messages} />
    </Container>
  );
};
