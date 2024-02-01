import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const YourComponent = ({ img }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        src={img}
        sx={{
          width: "100%",
          height: "100%",

          objectFit: "cover",
          transition: "opacity 0.3s ease",
          "&:hover": {
            opacity: 0.8,
          },
          cursor: "pointer",
        }}
      />
    </Card>
  );
};

export default YourComponent;
