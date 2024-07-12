import React from 'react';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';
// import './colors.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainPage from './MainPage';
// import Header from './Header';
// import UserProfile from './UserProfile';
// import Termine from './Termine';
// import Login from './Login';
import TestComponent from './TestComponent';

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <Routes>
            {/* <Route path="/" element={<MainPage />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/termine" element={<Termine />} />
            <Route path="/login" element={<Login />} /> */}
            <Route path="/test" element={<TestComponent />} />
          </Routes>
        </div>
      </Router>
    // </ThemeProvider>
  );
}

export default App;
