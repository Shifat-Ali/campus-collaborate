import React, { useState, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import {
  Divider,
  Tab,
  Tabs,
  Box,
  Typography,
  Container,
  Paper,
  TextField,
  InputAdornment,
  Link,
  Button,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const MyQuillEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const quillStyle = {
    width: "80%",
    height: "200px",
    borderRadius: "10px",
    margin: "auto",
    // border: "1px solid blue",
  };

  return (
    <ReactQuill style={quillStyle} value={content} onChange={handleChange} />
  );
};

export default function NewProj() {
  const handleIconClick = () => {
    alert("Clicked");
  };
  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <input
                    type="file"
                    id="file"
                    style={{ display: "none" }}
                    accept="image/png, image/gif, image/jpeg"
                  />
                  <label for="file">
                    <AddPhotoAlternateIcon
                      sx={{
                        "&:hover": { cursor: "pointer" },
                        display: "block",
                      }}
                    />
                  </label>
                </InputAdornment>
              ),
            }}
            // label="Add Banner"
            variant="outlined"
            defaultValue="Add Banner"
            disabled
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            label="Link to Project"
            variant="outlined"
          />
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <TextField
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkIcon />
                </InputAdornment>
              ),
            }}
            label="Title"
            variant="outlined"
          />
        </Container>
        <Container
          sx={{
            border: "1px solid #b3b3b3",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "10px",
            width: "80%",
            marginBottom: "10px",
          }}
        >
          <input type="file" />
        </Container>
        <MyQuillEditor />
      </Box>
      <Button>Hhe</Button>
    </Paper>
  );
}
