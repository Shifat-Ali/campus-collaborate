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
          </Container>
  );
}
