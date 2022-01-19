import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import "./styles.css";

const SigninPage = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const signinClick = (e) => {
    e.preventDefault();    
    // signin(user, password); // integração com context e api

    if(password === repassword){
      console.log({user, password});
      alert("usuario cadastrado");
      navigate("/login");
    } else {
      alert("senhas diferentes");
    }      
  }

  const loginClick = (e) => {
    e.preventDefault();
    navigate("/login");
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
      Cadastrar
      </Typography>

      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={signinClick} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Nome"
            id="user"
            name="user"
            value={user} 
            color="success"
            onChange={(e) => setUser(e.target.value)} 
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            id="email"
            name="email"
            type="email"
            value={email} 
            color="success"
            onChange={(e) => setEmail(e.target.value)} 
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
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirmar senha"
            id="repassword"
            name="repassword"
            type="password"
            value={repassword} 
            color="success"
            onChange={(e) => setRepassword(e.target.value)} 
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="success"
          >
            Cadastrar
          </Button>
        </Box>
      </Container>

      <Link onClick={loginClick} id="linkLogin">
        {"Login"}
      </Link>
    </Box>
    </div>
  );  
}

export default SigninPage