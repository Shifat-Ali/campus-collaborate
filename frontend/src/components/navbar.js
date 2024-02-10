import { AppBar, Typography, Tabs, Tab, Toolbar, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: "#ECF4D6" }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <Typography sx={{ color: "black", fontWeight: "800", width: "200px" }}>
            PeerHub
          </Typography>
        </a>
        
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Tabs>
            <a href="/whats-new">
              <Tab label="What's New ?" sx={{ width: "140px", marginRight: "16px", color: 'black' }} />
            </a>
            <a href="/features">
              <Tab label="Features" sx={{ width: "140px", marginRight: "16px", color: 'black' }} />
            </a>
            <a href="/about">
              <Tab label="About" sx={{ width: "140px", color: 'black' }} />
            </a>
          </Tabs>
        </div>
      </Toolbar>
    </AppBar>
  );
}
