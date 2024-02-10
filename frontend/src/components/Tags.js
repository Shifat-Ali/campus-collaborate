import React, { useState, useEffect } from "react";
import { Box, Button, Chip, Menu, MenuItem, TextField } from "@mui/material";
import axios from "axios";

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get("/tags");
        setAvailableTags(response.data);
        console.log(availableTags);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };
    fetchTags();
  }, []);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Sort the availableTags array alphabetically before setting it as the initial state
    setAvailableTags((prevTags) => prevTags.sort());
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleAddTag = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
      setAvailableTags((prevTags) =>
        prevTags.filter((prevTag) => prevTag !== tag)
      );
    }
  };

  const handleTagSelect = (tag) => {
    handleAddTag(tag);
    handleCloseMenu();
  };

  const handleRemoveTag = (tagToRemove) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((prevTag) => prevTag !== tagToRemove)
    );
    setAvailableTags((prevTags) => [...prevTags, tagToRemove].sort());
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  // Filter available tags based on search text
  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(searchText)
  );
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        justifyContent: "flex-start",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {selectedTags.map((tag) => (
        <Chip
          key={tag}
          label={`${tag}`}
          onDelete={() => handleRemoveTag(tag)}
          sx={{ marginLeft: "5px" }}
        />
      ))}
      <Button onClick={handleOpenMenu} variant="contained">
        Add Tags
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            maxHeight: 200, // Set max height for menu
            overflowY: "auto", // Enable vertical scrolling
          },
        }}
      >
        <TextField
          label="Search Tags"
          variant="outlined"
          size="small"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={handleSearch}
          sx={{ marginBottom: "10px" }}
        />
        {filteredTags.map((tag) => (
          <MenuItem key={tag} onClick={() => handleTagSelect(tag)}>
            {tag}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Tags;
