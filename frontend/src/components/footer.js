import { Typography, Container, Paper, Grid } from "@mui/material";

export default function Footer() {
  const footerlow = ["Blog", "What's New", "Careers", "Help", "Brand Kit"];
  return (
    <footer>
      <Container>
        <Typography
          variant="h1"
          sx={{
            mt: 10,
            textAlign: "center",
            fontWeight: "800",
          }}
        >
          PeerHub
        </Typography>
      </Container>

      <div style={{
        backgroundColor:'black',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'10vh',
        fontSize:'3vh',

      }}>
       (c) Copyright 2024 Brahmaputra Hostel, IIT Guwahati
      </div>
    </footer>
  );
}