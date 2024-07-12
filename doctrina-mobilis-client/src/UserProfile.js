// src/UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { PhotoCamera } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import defaultProfile from './assets/defaultProfile.jpg';

function UserProfile() {
  const [profilePic, setProfilePic] = useState(defaultProfile);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = () => {
    // TODO: Implement saving logic
    console.log('Profile saved:', userData);
  };

  const handleProfilePicChange = () => {
    // TODO: Implement profile picture change logic
    console.log('Profile picture change initiated');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="user-profile">
      <h1>Profil verwalten</h1>
      <div className="profile-pic-wrapper">
        <img src={profilePic} alt="Profile" className="profile-pic-large" />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="profile-pic-upload"
          type="file"
          onChange={handleProfilePicChange}
        />
      </div>
      <form className="profile-form">
        <div className="form-group">
          <label>Vorname:</label>
          <TextField
            name="firstName"
            variant="outlined"
            value={userData.firstName}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Nachname:</label>
          <TextField
            name="lastName"
            variant="outlined"
            value={userData.lastName}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Benutzername:</label>
          <TextField
            name="username"
            variant="outlined"
            value={userData.username}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <TextField
            name="email"
            type="email"
            variant="outlined"
            value={userData.email}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Neues Passwort:</label>
          <TextField
            name="password"
            type="password"
            variant="outlined"
            value={userData.password}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Neues Passwort bestätigen:</label>
          <TextField
            name="confirmPassword"
            type="password"
            variant="outlined"
            value={userData.confirmPassword}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="form-group">
          <label>Telefonnummer:</label>
          <TextField
            name="phoneNumber"
            variant="outlined"
            value={userData.phoneNumber}
            onChange={handleInputChange}
            className="profile-input"
          />
        </div>
        <div className="button-group">
          <Button variant="contained" className="save-button" onClick={handleSave}>
            Speichern
          </Button>
          <Button variant="contained" className="cancel-button" onClick={handleCancel}>
            Abbrechen
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
