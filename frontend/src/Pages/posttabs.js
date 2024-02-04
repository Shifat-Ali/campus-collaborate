import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Divider, Tab, Tabs, Box, Typography, Container } from "@mui/material";

import Theme from "./themes";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PostAddIcon from "@mui/icons-material/PostAdd";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { ThemeProvider } from "styled-components";
import NewProj from "./NewProj";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        (index === 0 ? (
          <Typography>Second</Typography>
        ) : index === 1 ? (
          <NewProj />
        ) : (
          <Typography>Third</Typography>
        ))}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PostTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{ marginLeft: 5, border: "1px solid black", marginBottom: "100px" }}
      >
        <Container
          sx={{
            borderBottom: "1px solid black",
            // height: "40px",
          }}
          className="boxcon"
        >
          <Tabs value={value} onChange={handleChange} variant="fullWidth">
            <Tab
              icon={<InsertDriveFileIcon />}
              iconPosition="start"
              label="Create Post"
              {...a11yProps(0)}
            />

            <Tab
              icon={<PostAddIcon />}
              iconPosition="start"
              label="Create Project"
              {...a11yProps(1)}
            />
            <Tab
              icon={<WorkOutlineIcon />}
              iconPosition="start"
              label="Work Oppurtunity"
              {...a11yProps(2)}
            />
          </Tabs>
        </Container>
        <CustomTabPanel index={0} value={value}>
          hehe
        </CustomTabPanel>
        <CustomTabPanel index={1} value={value}>
          hehe23
        </CustomTabPanel>
        <CustomTabPanel index={2} value={value}>
          hehe3
        </CustomTabPanel>
      </Box>
    </ThemeProvider>
  );
}
