// src/BottomBar.js
import React from 'react';
import './BottomBar.css'; // Ensure this CSS file contains the .bottom-bar and .menu-button styles

const BottomBar = ({ toggleSidebar }) => {
  return (
    <div className="bottom-bar">
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>
    </div>
  );
};

export default BottomBar;
