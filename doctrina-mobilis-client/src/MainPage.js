import React, { useState } from 'react';
import './MainPage.css';
import CourseNavigation from './CourseNavigation';
import BottomBar from './BottomBar'; // Import BottomBar component
import Termine from './Termine';
import EinführungEchokardiographie from './EinführungEchokardiographie';
import UserProfile from './UserProfile';
import { Route, Routes } from 'react-router-dom';

function MainPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    const mainContent = document.querySelector('.main-content');
    if (sidebarOpen) {
      mainContent.classList.remove('shifted');
    } else {
      mainContent.classList.add('shifted');
    }
  };

  return (
    <div id="container" className={sidebarOpen ? 'sidebar-open' : ''}>
      <nav>
        <CourseNavigation toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </nav>
      <main className={`main-content ${sidebarOpen ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/" element={<EinführungEchokardiographie />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <aside id="termine">
        <h2>Termine</h2>
        <Termine />
      </aside>
      <BottomBar toggleSidebar={toggleSidebar} /> {/* Include BottomBar and pass the toggle function */}
    </div>
  );
}

export default MainPage;
