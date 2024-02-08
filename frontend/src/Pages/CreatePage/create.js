import React, { useState } from "react";

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
import Theme from "../themes";
import UpBar from "./upBar";
import SideBar from "./sideBar";
import PostTabs from "./posttabs";
import RightBar from "./RightBar";

const CreatePost = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Grid container spacing={0}>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <UpBar />

          <Box>
            <Container sx={{ pt: 10 }}>
              <Typography variant="h4">Create a Post</Typography>
            </Container>
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
  );
};

export default CreatePost;
