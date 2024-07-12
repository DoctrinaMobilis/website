// src/Header.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Login from './Login';
import logo from './assets/Logo128.png';
import defaultProfile from './assets/defaultProfile.jpg';
import './Header.css';

function Header() {
  const { isLoggedIn, user, logout } = useAuth();
  const [coursesAnchorEl, setCoursesAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleCoursesMenu = (event) => {
    setCoursesAnchorEl(event.currentTarget);
  };

  const handleCoursesClose = () => {
    setCoursesAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/profile');
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <div className="left-section">
          <img src={logo} alt="Website Logo" className="logo-image" />
          <Typography variant="h4" className="title">
            Doctrina mobilis
          </Typography>
        </div>
        <div className="center-section">
          <Button
            color="inherit"
            aria-controls="courses-menu"
            aria-haspopup="true"
            onClick={handleCoursesMenu}
          >
            Kurse
          </Button>
          <Menu
            id="courses-menu"
            anchorEl={coursesAnchorEl}
            keepMounted
            open={Boolean(coursesAnchorEl)}
            onClose={handleCoursesClose}
          >
            <MenuItem onClick={handleCoursesClose} component="a" href="#echokardiographie">
              Echokardiographie
            </MenuItem>
            <MenuItem onClick={handleCoursesClose} component="a" href="#ekg1">
              EKG 1
            </MenuItem>
            <MenuItem onClick={handleCoursesClose} component="a" href="#ekg2">
              EKG 2
            </MenuItem>
          </Menu>
          <Button color="inherit" href="#faq">FAQ</Button>
          <Button color="inherit" href="#kontakt">Kontakt</Button>
        </div>
        <div className="right-section user-section">
          {!isLoggedIn ? (
            <Login />
          ) : (
            <>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <img src={defaultProfile} alt="Profile" className="profile-pic" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={profileAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(profileAnchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleProfile}>Profil verwalten</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
