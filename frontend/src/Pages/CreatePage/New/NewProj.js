import React, { useState, useEffect } from "react";
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
  Chip,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Tags from "../Tags";
const MyQuillEditor = () => {
  const [content, setContent] = useState("");
  const [minHeight, setMinHeight] = useState("100px"); // Initial minimum height

  useEffect(() => {
    // Measure the content's height
    const editor = document.querySelector(".ql-editor");
    if (editor) {
      const contentHeight = editor.clientHeight;
      // Update the minHeight based on the content's height
      setMinHeight(Math.max(contentHeight, 0) + "px"); // Minimum height of 100px
    }
  }, [content]);

  const handleChange = (value) => {
    setContent(value);
  };

  const quillStyle = {
    width: "80%",
    height: "auto",
    minHeight: minHeight, // Set minHeight dynamically
    borderRadius: "10px",
    margin: "auto",
  };

  return (
    <ReactQuill style={quillStyle} value={content} onChange={handleChange} />
  );
};

export default function NewProj() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagAdd = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };
  return (
    <Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "30px",
          flexWrap: "wrap",
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
            label="Title"
            variant="outlined"
            InputLabelProps={{ shrink: true }} // Ensure label does not move
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
            label="Add Description"
            variant="outlined"
            InputLabelProps={{ shrink: true }} // Ensure label does not move
          />
        </Container>
        <MyQuillEditor />
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            marginTop: "20px",
            // overflowX: "auto",
            flexWrap: "wrap",
          }}
        >
          <Tags onTagAdd={handleTagAdd} />
        </Container>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          {selectedTags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ marginRight: "5px" }} />
          ))}
        </Box>
        <Button
          sx={{
            backgroundColor: "#1976d2",
            marginTop: "10px",
            color: "white",
            width: "10%",
            marginLeft: "auto",
          }}
        >
          POST
        </Button>
      </Box>
    </Paper>
  );
}
