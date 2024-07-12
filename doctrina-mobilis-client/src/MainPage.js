// src/MainPage.js
import React from 'react';
import './MainPage.css';
import CourseNavigation from './CourseNavigation';
import Termine from './Termine';
import EinführungEchokardiographie from './EinführungEchokardiographie';
import UserProfile from './UserProfile'; // Importiere die UserProfile-Komponente
import { Route, Routes } from 'react-router-dom';

function MainPage() {
  return (
    <div id="container">
      <nav>
        <CourseNavigation />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<EinführungEchokardiographie />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
      <aside id="termine">
        <h2>Termine</h2>
        <Termine />
      </aside>
    </div>
  );
}

export default MainPage;
