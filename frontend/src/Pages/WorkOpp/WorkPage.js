import React from "react";

import WorkCard from "./WorkCard"; // Import the component for displaying individual work opportunities
import Theme from "../themes";
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
  CssBaseline,
  GlobalStyles,
  Button,
} from "@mui/material";
import WorkUpSideBar from "./WorkUpSideBar";
import RightBar from "../CreatePage/RightBar";
import WorkUpBar from "./WorkUpBar";
import { borderColor, textColor } from "../colors";
const workOpportunities = [
  // Define some sample work opportunities
  {
    id: 1,
    title: "Web Developer",
    company: "ABC Tech",
    location: "Remote",
    description: "Seeking a talented web developer to join our team.",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "XYZ Analytics",
    location: "New York, NY",
    description:
      "Looking for a skilled data analyst to work on exciting projects.",
  },
  {
    id: 3,
    title: "Web Developer",
    company: "ABC Tech",
    location: "Remote",
    description: "Seeking a talented web developer to join our team.",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "XYZ Analytics",
    location: "New York, NY",
    description:
      "Looking for a skilled data analyst to work on exciting projects.",
  },
  {
    id: 5,
    title: "Web Developer",
    company: "ABC Tech",
    location: "Remote",
    description: "Seeking a talented web developer to join our team.",
  },
  {
    id: 6,
    title: "Data Analyst",
    company: "XYZ Analytics",
    location: "New York, NY",
    description:
      "Looking for a skilled data analyst to work on exciting projects.",
  },
  // Add more work opportunities as needed
];

const WorkPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Grid container spacing={0}>
        <Grid item>
          <WorkUpSideBar />
        </Grid>
        <Grid item sx={{ flexGrow: 1 }}>
          <WorkUpBar />

          <Grid container sx={{ mt: 5, marginLeft: "40px" }} spacing={2}>
            <Grid
              item
              xs={9}
              sx={{ border: `1px solid ${borderColor}`, borderRadius: "50px" }}
            >
              <Grid container spacing={0} direction="column">
                <Grid item sx={{ flexGrow: 1 }}>
                  <Container
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "40px",
                    }}
                  >
                    <Typography variant="h5" sx={{ display: "inline-block" }}>
                      Browse Work Opportunities
                    </Typography>
                    <Button variant="contained" color="primary">
                      + Add Opportunities
                    </Button>
                  </Container>
                </Grid>
                <Divider />

                {workOpportunities.map((opportunity) => (
                  <WorkCard key={opportunity.id} opportunity={opportunity} />
                ))}
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <RightBar />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default WorkPage;
