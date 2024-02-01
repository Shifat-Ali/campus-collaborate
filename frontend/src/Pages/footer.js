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

      <Paper sx={{ backgroundColor: "black" }}>
        <Grid
          container
          sx={{
            mt: 10,
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              height: 80,
            }}
          >
            {footerlow.map((prop, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={2.4}
                  md={2}
                  sx={{ color: "white", mt: 3 }}
                >
                  <Typography
                    href="#"
                    variant="h8"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      textAlign: "center",
                      display: "block",
                    }}
                  >
                    {prop}
                  </Typography>
                </Grid>
              );
            })}
          </Container>
        </Grid>
      </Paper>
    </footer>
  );
}
