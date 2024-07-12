// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './colors.css'; // Importiere die CSS-Datei mit den Farbvariablen
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Header from './Header';
import UserProfile from './UserProfile';
import Termine from './Termine'; // Importiere die Termine-Komponente
import Login from './Login'; // Importiere die Login-Komponente
import TestComponent from './TestComponent'; // Importiere die Test-Komponente

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/termine" element={<Termine />} /> {/* Neue Route für Termine */}
            <Route path="/login" element={<Login />} /> {/* Neue Route für Login */}
            <Route path="/test" element={<TestComponent />} /> {/* Neue Route für Test */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
