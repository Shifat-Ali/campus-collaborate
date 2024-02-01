import {
  Typography,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import MicrosoftLoginComponent from "./Login";

export default function Inputlogin() {
  return (
    <Container sx={{ textAlign: "center" }}>
      <MicrosoftLoginComponent />
      <TextField
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon
                sx={{
                  margin: "10px",
                  "&:hover": { cursor: "pointer" },
                  color: "darkblue",
                  width: 32,
                  height: 32,
                }}
              />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="start">
              <SendIcon
                sx={{
                  "&:hover": { cursor: "pointer" },
                  // margin: "10px",
                  backgroundColor: "green",
                  color: "white",
                  boxSizing: "border-box",
                  padding: "10px",

                  width: 50,
                  height: 50,
                  // padding: "5px",
                  borderRadius: "30px",
                }}
              />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Typography sx={{ marginTop: "20px" }}>
        Claim your username before it's too late!
      </Typography>
    </Container>
  );
}
