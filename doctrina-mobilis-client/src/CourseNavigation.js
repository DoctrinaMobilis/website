import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import './CourseNavigation.css';

const CourseNavigation = () => {
  const [openEchokardiographie, setOpenEchokardiographie] = useState(false);
  const [openEKG1, setOpenEKG1] = useState(false);
  const [openEKG2, setOpenEKG2] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (course) => {
    if (course === 'Echokardiographie') {
      setOpenEchokardiographie(!openEchokardiographie);
    } else if (course === 'EKG1') {
      setOpenEKG1(!openEKG1);
    } else if (course === 'EKG2') {
      setOpenEKG2(!openEKG2);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`course-navigation ${sidebarOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰ Menü
      </button>
      <List component="nav">
        <ListItem button onClick={() => handleClick('Echokardiographie')}>
          <ListItemText primary="Echokardiographie" />
          {openEchokardiographie ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openEchokardiographie} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Kapitel 1: Einführung" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Kapitel 2: Grundlagen" />
            </ListItem>
            {/* Weitere Kapitel */}
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('EKG1')}>
          <ListItemText primary="EKG 1" />
          {openEKG1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openEKG1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Kapitel 1: Einführung" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Kapitel 2: Grundlagen" />
            </ListItem>
            {/* Weitere Kapitel */}
          </List>
        </Collapse>

        <ListItem button onClick={() => handleClick('EKG2')}>
          <ListItemText primary="EKG 2" />
          {openEKG2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openEKG2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemText primary="Kapitel 1: Einführung" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Kapitel 2: Grundlagen" />
            </ListItem>
            {/* Weitere Kapitel */}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default CourseNavigation;
