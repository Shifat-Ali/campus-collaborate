import {
  Container,
  ThemeProvider,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import Theme from "../themes";

const RightBar = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box
        sx={{
          marginLeft: 5,
          border: "1px solid black",
          marginBottom: "100px",
          marginRight: 5,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h6" sx={{ padding: "10px" }}>
          {" "}
          Posting Tips
        </Typography>
        <Divider sx={{ backgroundColor: "black" }} />
        <Container
          sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          <ul>
            <li>
              <Typography sx={{ marginTop: "8px", marginBottom: "8px" }}>
                Be respectful and supportive.{" "}
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: "8px" }}>
                Be clear and concise.
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: "8px" }}>
                Include relevant details
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: "8px" }}>
                Invite feedback
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: "8px" }}>
                Offer collaboration oppurtunities
              </Typography>
            </li>
            <li>
              <Typography sx={{ marginBottom: "8px" }}>
                Stay active and interact with others.
              </Typography>
            </li>
          </ul>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default RightBar;
