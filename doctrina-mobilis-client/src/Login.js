import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useAuth } from './AuthContext';
import './Login.css';

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://doctrina-mobilis.de/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      console.log('Response data:', data);  // Füge dies hinzu
      if (response.ok) {
        login({ name: username, profilePic: 'path/to/profile.jpg' }); // Beispiel-Benutzerdaten
        setMessage('Login successful');
      } else {
        setMessage(data.message || 'Invalid login credentials');
      }
    } catch (error) {
      setMessage('An error occurred while processing your request');
      console.error('Error:', error);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Benutzername"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            fullWidth
            className="input-field"
          />
        </div>
        <div>
          <TextField
            label="Passwort"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            className="input-field"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          className="login-button"
        >
          Login
        </Button>
      </form>
      <Link href="#register" className="register-link">Registrieren</Link>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
