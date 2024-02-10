import { useNavigate } from 'react-router';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SearchBar from './Search.js';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const drawerWidth = 300;

export default function RightPart() {
  // Hardcoded notifications with icons
  const notifications = [
    { user: 'User1', content: 'Notification 1 content', link: '#', icon: <AccountCircleIcon /> },
    { user: 'User2', content: 'Notification 2 content', link: '#', icon: <AccountCircleIcon /> },
    { user: 'User3', content: 'Notification 3 content', link: '#', icon: <AccountCircleIcon /> },
  ];

  // Hardcoded current user data
  const currentUser = {
    name: "John Doe",
    department: "BTech",
    branch: "CSE",
    year: "3rd Year",
    picture: <AccountCircleIcon style={{ fontSize: '50px' }} />
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', background: '#FAFAFA' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#FAFAFA',
            borderColor: '#FAFAFA'
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <div style={{ position: 'relative' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
            <NotificationsIcon style={{ marginRight: '25px' }} />
            <Button variant="contained" color="primary" onClick={() => navigate('/create')} >
              <EditIcon style={{ marginRight: '5px' }} /> Create Post
            </Button>
          </Box>

          <SearchBar />

          <div style={{ outline: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginTop: '20px', marginLeft: '1px', marginRight: '20px', position: 'relative', background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currentUser.picture}
              <div style={{ marginLeft: '10px' }}>
                <div>{currentUser.name} <ArrowForwardIcon style={{ fontSize: '15px' }} /></div>
                <div>{currentUser.department} •{currentUser.branch}• {currentUser.year}</div>
              </div>
            </div>
            <Button variant="contained" style={{ marginTop: '10px', textTransform: 'none', width: '100%', background: 'white', boxShadow: 'none', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ textAlign: 'left', width: '100%', fontWeight: 'lighter' }}><AttachFileIcon />Social Links</span>
              <KeyboardArrowRightIcon />
            </Button>
            <Button variant="contained" style={{ marginTop: '10px', textTransform: 'none', width: '100%', background: 'white', boxShadow: 'none', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ textAlign: 'left', width: '100%', fontWeight: 'lighter' }}><LibraryBooksIcon />Add Resume</span>
              <KeyboardArrowRightIcon />
            </Button>
            <Button variant="contained" style={{ marginTop: '10px', textTransform: 'none', width: '100%', background: 'white', boxShadow: 'none', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ textAlign: 'left', width: '100%', fontWeight: 'lighter' }}><AddIcon />Add work/projects</span>
              <KeyboardArrowRightIcon />
            </Button>


          </div>
          <div style={{ outline: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginTop: '20px', marginLeft: '1px', marginRight: '20px', position: 'relative', background: 'white' }}>

            Notifications <ArrowForwardIcon style={{ fontSize: '15px' }} />
            <div style={{ width: '100%', borderTop: '1px solid #ccc' }}></div> {/* Vertical line */}

            {/* Display notifications */}
            {notifications.map((notification, index) => (
              <div key={index} style={{ marginTop: '10px' }}>
                {notification.icon} <span style={{ fontWeight: 'bold' }}>{notification.user}</span>: {notification.content}
                <a href={notification.link} style={{ marginLeft: '5px' }}>View</a>
                <div style={{ width: '100%', borderTop: '1px solid #ccc' }}></div> {/* Vertical line */}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
