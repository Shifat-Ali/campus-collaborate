import React, { useState, useEffect } from "react";
import { Box, Button, Chip, Menu, MenuItem } from "@mui/material";

const Tags = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [availableTags, setAvailableTags] = useState([
    "Tag1",
    "Tag2",
    "Tag3",
    "Tag4",
    "Tag5",
    "Tag6",
    "Tag7",
    "Tag8",
    "Tag9",
    "Tag10",
    "Tag11",
  ]);

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
      >
        {availableTags.map((tag) => (
          <MenuItem key={tag} onClick={() => handleTagSelect(tag)}>
            {tag}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default Tags;
