import React from "react";
import {
  Divider,
  Drawer,
  List,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import Theme from "../themes";

const drawerWidth = 250;
const items = [
  { childId: "Write a Post", icon: <CreateIcon />, active: true },
  { childId: "Explore", icon: <ExploreIcon /> },
  { childId: "Course Review", icon: <SsidChartIcon /> },
  { childId: "My Profile", icon: <PersonIcon /> },
];
const item = {
  py: "2px",
  px: 3,

  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function WorkUpSideBar() {
  return (
    <ThemeProvider theme={Theme}>
      <Drawer variant="permanent" style={{ width: drawerWidth }}>
        <List>
          <ListItem
            sx={{
              ...item,
              ...itemCategory,
              fontSize: 22,
              width: drawerWidth,
            }}
          >
            PeerHub
            {/* //add logo */}
          </ListItem>
          {/* <Divider /> */}
          {items.map(({ id, childId, icon, active }) => (
            <Box key={id}>
              <ListItem sx={{ py: 2, px: 3 }}>
                <ListItemText>{id}</ListItemText>
              </ListItem>
              <ListItem
                key={childId}
                sx={{ alignItems: "center", height: "20px" }}
              >
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            </Box>
          ))}
        </List>
      </Drawer>
    </ThemeProvider>
  );
}
