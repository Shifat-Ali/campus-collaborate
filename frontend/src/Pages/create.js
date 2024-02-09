import React, { useState } from "react";
import Login from "../components/Login";
import { styled, alpha } from "@mui/material/styles";
import {
  ThemeProvider,
  Grid,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Container,
  Toolbar,
  InputBase,
  Divider,
  Typography, 
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import Theme from "../components/themes";
import SideBar from "../components/Leftbar";
import PostTabs from "../components/posttabs";
import RightBar from "../components/RightBar";

const CreatePost = () => {
  return (
    <>
    <ThemeProvider theme={Theme}>
      <Grid container spacing={0}>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          

          <Box>
          
            <Grid container sx={{ mt: 5 }} spacing={2}>
              <Grid item xs={9}>
                <PostTabs />
              </Grid>
              <Grid item xs={3}>
                <RightBar />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
};

export default CreatePost;
