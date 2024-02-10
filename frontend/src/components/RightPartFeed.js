import { useNavigate } from 'react-router';
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import SearchBar from './Search.js';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import moment from 'moment';

const drawerWidth = 300;

export default function RightPart() {
  // Hardcoded opportunity data
  const opportunity = [
    {
      title: 'Event 1',
      subtitle: 'XYZ Club',
      description: 'very good opportunity',
      icon: <LibraryBooksIcon />,
      expiryDate: '2024-02-28'
    },
    {
      title: 'Event 2',
      subtitle: 'ABC Club',
      description: 'very good opportunity',
      icon: <LibraryBooksIcon />,
      expiryDate: '2024-03-15'
    },

  ];

  // Function to calculate remaining days
  const calculateRemainingDays = (expiryDate) => {
    const currentDate = moment();
    const endDate = moment(expiryDate);
    const remainingDays = endDate.diff(currentDate, 'days');
    return remainingDays;
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
            <Button variant="contained" color="primary" onClick={() => { navigate('/create') }}>
              <EditIcon style={{ marginRight: '5px' }} /> Create Post
            </Button>
          </Box>

          <SearchBar />

          <div style={{ outline: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginTop: '20px', marginLeft: '1px', marginRight: '20px', position: 'relative', background: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AccountCircleIcon style={{ fontSize: '50px' }} />
              <div style={{ marginLeft: '10px' }}>
                <div>John Doe <ArrowForwardIcon style={{ fontSize: '15px' }} /></div>
                <div>BTech • CSE • 3rd Year</div>
                <div style={{ width: '200px', wordWrap: 'break-word', marginTop: '10px' }}>fficia aliqua enim non nostrud ad aliquip.</div>
              </div>
            </div>
          </div>
          <div style={{ outline: '1px solid #ccc', borderRadius: '10px', padding: '10px', marginTop: '20px', marginLeft: '1px', marginRight: '20px', position: 'relative', background: 'white' }}>
            <div onClick={() => { navigate('/opportunities') }}>
              Explore Opportunities <ArrowForwardIcon style={{ fontSize: '15px' }} />
            </div>
            <div style={{ width: '100%', borderTop: '1px solid #ccc', marginTop: '10px' }}></div> {/* Vertical line */}
            {/* Display opportunities */}
            {opportunity.map((item, index) => (
              <div key={index} style={{ marginTop: '10px' }}>
                <hr style={{ borderTop: '1px solid #ccc', margin: '5px 0' }} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ marginRight: '10px' }}>{item.icon}</div>
                  <div>
                    <div><strong>{item.title}</strong></div>
                    <div>{item.subtitle}</div>
                  </div>
                </div>
                <div>{item.description}</div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <div style={{ background: '#0261FB14', color: 'black', padding: '10px 18px', borderRadius: '8px', marginRight: '1px', fontSize: '0.8rem', width: '100%', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      Expiring in <div style={{ fontSize: '18px' }}> {calculateRemainingDays(item.expiryDate)} days</div>
                    </div>
                    <Button variant="contained" color="primary" style={{ marginLeft: 'auto', padding: '2px 8px', fontSize: '0.8rem', background: 'white', color: 'black', height: '35px', boxShadow: 'none' }}>Apply</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
