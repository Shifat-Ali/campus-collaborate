import React from "react";
import {
  Typography,
  ThemeProvider,
  Box,
  Container,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Theme from "../components/themes";
import Navbar from "../components/navbar";
import Inputlogin from "../components/inputLogin";
import YourComponent from "../components/checkcom";
import Footer from "../components/footer";
import courseimg1 from "../media/courses.jpeg";
import courseimg2 from "../media/courseimg2.jpeg";
import courseimg3 from "../media/courseimg3.jpeg";
import courseimg4 from "../media/courseimg4.jpeg";
import courseimg5 from "../media/courseimg5.jpeg";
import courseimg6 from "../media/courseimg6.jpeg";

export default function LandingPage() {
  const cards = [
    { name: "Rate and Review Courses", image: courseimg1 },
    { name: "Customize your feed", image: courseimg2 },
    { name: "Launch Side Projects", image: courseimg3 },
    { name: "Build your portfolio", image: courseimg4 },
    { name: "Explore Opportunities", image: courseimg5 },
    { name: "Find people", image: courseimg6 },
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
              {/* <Typography variant="div" sx={{ marginTop: "100px" }}>
                 
              </Typography> */}
              <div style={{
                marginTop:'10vh',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',

              }}
              ><div style={{
                fontSize:'4vw',
                marginBottom:'0.1vw',
                fontFamily:'fantasy'
              }}>Welcome to PeerHub!</div> <div style={{
                
                fontFamily:'fantasy',
                fontSize:'2vw',
              }}>Create, Connect and Collaborate</div></div>
              
            </Container>
          </Box>
          <Inputlogin />
          <Container>
            <Typography
              variant="div"
              sx={{display:'flex', mt: 10, fontWeight: "800", textAlign: "center" ,alignItems:'center',justifyContent:'center',marginTop:'1vw'}}
            >
              Start publishing your projects and find similar interests
            </Typography>
            <Container>
              {/* <Typography
                variant="h6"
                sx={{ mt: 3, textAlign: "center", fontWeight: "400" }}
              >
                Lorem ipswfnfnw knfkewnf wcqfwendmwoqo Lorem <br /> ipswfnfnw
                knfkewnf wcqfwen dmwoqo
              </Typography> */}
            </Container>
          </Container>
          <Container sx={{ py: 8 }}>
            <Grid container spacing={4}>
              {cards.map((card, index) => {
                if (index !== 6) {
                  return (
                    <Grid item key={card.name} xs={12} sm={6} md={4}>
                      <Paper>
                        <YourComponent courseimg={card.image}></YourComponent>
                        <Typography
                          className="intext"
                          sx={{
                            width: "100%",
                            backgroundColor: "white",
                            padding: "5px",
                            paddingLeft: "10px",
                            fontSize:'3vh',
                            fontWeight:'600',
                            display:'flex',
                            textAlign:'center',
                            justifyContent:'center',
                            border:'1px solid'
                          }}
                        >
                          {card.name}
                        </Typography>
                      </Paper>
                    </Grid>
                  );
                } else {
                  return (
                    <Grid item key={card.name} xs={12} sm={6} md={4}>
                      <Paper></Paper>
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Container>
          <Container>
            <Typography
              variant="div"
              sx={{ mt: 4, fontWeight: "700",fontSize:'6vh', textAlign: "center" }}
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