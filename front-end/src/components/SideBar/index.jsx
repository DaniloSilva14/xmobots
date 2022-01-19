import React, { useContext } from "react";

import { ApplicationContext } from "../../contexts/application";

import { useNavigate } from "react-router-dom";

import LogoutIcon from '@mui/icons-material/Logout';
import UploadIcon from '@mui/icons-material/Upload';
import MapIcon from '@mui/icons-material/Map';
import Button from '@mui/material/Button';

import logo from "../../assets/logo.png";

import "./styles.css"

const SideBar = () => {
  const { user, logout } = useContext(ApplicationContext);
  
  const navigate = useNavigate();

  const mapClick = (e) => {
    e.preventDefault();
    navigate("/");
  }

  const uploadClick = (e) => {
    e.preventDefault();
    navigate("/upload");
  }

  const logoutClick = (e) => {
    e.preventDefault();
    logout()
  }

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} height={100} width={100} alt="logo"/>
      </div>

      <div className="sidebar-content">

        <div className="line">
          <span>{String(user.user)}</span>
        </div>

        <div className="line">
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            component="span" 
            onClick={mapClick}
            color="success"
          >
            <MapIcon fontSize="small" />
            Mapa
          </Button>
        </div>

        <div className="line">
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="success"
              onClick={uploadClick}
            >
              <UploadIcon fontSize="small" />
              Upload
            </Button>
        </div>

        <div className="line">
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={logoutClick}
            color="success"
          >
            <LogoutIcon fontSize="small" />
            Logout
          </Button>
          {/* <span className="logout" onClick={logoutClick}>  </span> */}
        </div>
      </div>     
      
    </div>
  );
}

export default SideBar