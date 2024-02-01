import { AppBar, Typography, Tabs, Tab, Toolbar, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: "#ECF4D6" }}>
      <Toolbar>
        <Typography sx={{ color: "black", fontWeight: "800", width: "200px" }}>
          PeerHub
        </Typography>
        <Tabs>
          <Tab
            label="What's New ?"
            sx={{ width: "140px", marginRight: "16px" }}
          />
          <Tab label="Features" sx={{ width: "140px", marginRight: "16px" }} />
          <Tab label="About" sx={{ width: "140px" }} />
        </Tabs>
        <Button variant="contained" color="success" sx={{ marginLeft: "auto" }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
