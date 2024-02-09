import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Container,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import img from "../media/render.jpg";
import Theme from "../components/themes";
import Navbar from "../components/navbar";
import Inputlogin from "../components/inputLogin";
import YourComponent from "../components/checkcom";
import Footer from "../components/footer";

export default function LandingPage() {
  const cards = [
    "PeerHub Profile",
    "PeerHub Threads",
    "Launch Side Projects",
    "Do Crazy stuff",
    "Leave it",
    "Find people",
  ];
  
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Container>
              <Typography variant="h1" sx={{ marginTop: "100px" }}>
                lorem ipsum donor <br /> sit amet consdnfnf <br /> adjonfnf
              </Typography>
              <Typography sx={{ marginTop: "30px" }}>Login fas fas</Typography>
            </Container>
          </Box>
          <Inputlogin />
          <Container>
            <Typography
              variant="h2"
              sx={{ mt: 10, fontWeight: "800", textAlign: "center" }}
            >
              Start publishing your projects and find similar intrests
            </Typography>
            <Container>
              <Typography
                variant="h6"
                sx={{ mt: 3, textAlign: "center", fontWeight: "400" }}
              >
                Lorem ipswfnfnw knfkewnf wcqfwendmwoqo Lorem <br /> ipswfnfnw
                knfkewnf wcqfwen dmwoqo
              </Typography>
            </Container>
          </Container>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
              {cards.map((card, index) => {
                if (index !== 4) {
                  return (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Paper>
                        <YourComponent img={img}></YourComponent>
                        <Typography
                          className="intext"
                          sx={{
                            width: "100%",
                            backgroundColor: "#ecf4d6",
                            padding: "5px",
                            paddingLeft: "10px",
                          }}
                        >
                          {card}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Paper></Paper>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Container>
          <Container>
            <Typography
              variant="h2"
              sx={{ mt: 4, fontWeight: "700", textAlign: "center" }}
            >
              Publish your projects now!
            </Typography>
          </Container>
        </main>
        <Footer/>
      </ThemeProvider>
    </>
  );
}
