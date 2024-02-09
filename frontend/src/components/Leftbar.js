import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';

const drawerWidth = 250;

export default function PermanentDrawerLeft() {
  // Hardcoded username
  const username = 'User1';

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> 
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:'#eeeeee',
            borderColor:'#eeeeee'
          },
        }}
        variant="permanent"
        anchor="left"
      >
     

        {/* Original button section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' ,marginTop:'100px'}}>
          <Button variant="contained" color="primary">
            <EditIcon style={{ marginRight: '5px' }} /> Create Post
          </Button>
        </Box>

        {/* Three buttons with no background, aligned at the center horizontally */}

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '40px' }}>
        <Button style={{ margin: '8px', textTransform: 'none', color: 'black' }}>
             Feed
          </Button>
          <Button style={{ margin: '8px', textTransform: 'none', color: 'black' }}>
             Explore
          </Button>
          <Button style={{ margin: '8px', textTransform: 'none', color: 'black' }}>
             Course Review
          </Button>
          <Button style={{ margin: '8px', textTransform: 'none', color: 'black' }}>
             Opportunities
          </Button>
        </Box>

        {/* Additional button at the extreme bottom */}
        <Box sx={{ textAlign: 'center',marginTop:'auto' }}>
          <Button style={{ margin: '8px', textTransform: 'none', color: 'black' }}>
            <PersonOutlineIcon style={{ marginRight: '5px' }} /> My Profile
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
}
