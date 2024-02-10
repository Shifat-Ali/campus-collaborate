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
import Tags from "./Tags";
const MyQuillEditor = () => {
  const [content, setContent] = useState("");
  const [editorHeight, setEditorHeight] = useState("100px"); // Initial editor height

  useEffect(() => {
    // Measure the content's height
    const editor = document.querySelector(".ql-container");
    if (editor) {
      const contentHeight = editor.clientHeight;
      // Set the editor height based on content height
      setEditorHeight(Math.max(contentHeight, 100) + "px"); // Minimum height of 100px
    }
  }, [content]);

  const handleChange = (value) => {
    setContent(value);
  };

  const quillStyle = {
    width: "80%",
    minHeight: "200px", // Minimum height for the editor
    height: editorHeight, // Dynamic height based on content
    borderRadius: "10px",
    margin: "auto",
    // border: "1px solid #ccc", // Add a border to make the boundary visible
    // overflowY: "auto", // Enable vertical scrolling if content overflows
  };
  return (
    <ReactQuill
      style={quillStyle}
      value={content}
      onChange={handleChange}
      placeholder="Details..."
    />
  );
};

export default function NewProj() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  const handleTagAdd = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };

  const handlePost = async () => {
    try {
      const response = await axios.post("http://localhost:2015/projects", {
        title,
        description,
        link,
        tags: selectedTags,
      });
      console.log("Project posted successfully:", response.data);
      // Reset state or show success message
    } catch (error) {
      console.error("Error posting project:", error);
      // Handle error
    }
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
            value={link}
            onChange={(e) => setLink(e.target.value)}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            InputLabelProps={{ shrink: true }} // Ensure label does not move
          />
        </Container>
        <MyQuillEditor />
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "center",
            marginTop: "40px",
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
          onClick={handlePost}
          sx={{
            backgroundColor: "#1976d2",
            marginTop: "10px",
            color: "white",
            width: "10%",
            marginLeft: "auto",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          POST
        </Button>
      </Box>
    </Paper>
  );
}
