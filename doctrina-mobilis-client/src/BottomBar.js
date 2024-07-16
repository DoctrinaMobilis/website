import React from 'react';
import './BottomBar.css';

const BottomBar = ({ toggleSidebar }) => {
  return (
    <div className="bottom-bar">
      <button onClick={toggleSidebar}>☰</button>
    </div>
  );
};

export default BottomBar;
