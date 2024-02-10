import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  ThemeProvider,
  CssBaseline,
  Divider,
} from "@mui/material";
import Theme from "../themes";
import WorkUpBar from "./WorkUpBar";
import { borderColor, textColor } from "../colors";
const WorkCard = ({ opportunity }) => {
  const { title, company, location, description } = opportunity;

  const handleApply = () => {
    // Implement logic for applying to the work opportunity
    console.log("Applying to the work opportunity:", title);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Typography variant="h6" component="div" sx={{ marginTop: "10px" }}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        gutterBottom
        sx={{}}
      >
        {company} - {location}
      </Typography>
      <Typography variant="body1" sx={{ margin: "10px" }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleApply}
        sx={{ marginLeft: "auto", marginBottom: "30px", marginRight: "30px" }}
      >
        Apply
      </Button>
      <Divider />
    </ThemeProvider>
  );
};

export default WorkCard;
