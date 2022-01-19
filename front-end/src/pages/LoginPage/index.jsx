import React, { useState, useContext } from "react";

import { ApplicationContext } from "../../contexts/application"

import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import "./styles.css";

const LoginPage = () => {
  const { login } = useContext(ApplicationContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginClick = (e) => {
    e.preventDefault();
    login(user, password); // integração com context e api
  }

  const signinClick = (e) => {
    e.preventDefault();
    navigate("/signin");
  }

  return (
    <div className="main">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        className="content"
      >

        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Container component="main" maxWidth="xs">
          <Box component="form" onSubmit={loginClick} sx={{ mt: 1 }}>
            <TextField
              autoFocus
              margin="normal"
              required
              fullWidth
              label="Usuario"
              id="user"
              name="user"
              value={user} 
              onChange={(e) => setUser(e.target.value)} 
              color="success"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              id="password"
              name="password"
              type="password"
              value={password} 
              color="success"
              onChange={(e) => setPassword(e.target.value)} 
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
            >
              Entrar
            </Button>
          </Box>
        </Container>

        <Link onClick={signinClick} id="linkSignin">
          {"Cadastrar"}
        </Link>
      </Box>
    </div>
  );  
}

export default LoginPage