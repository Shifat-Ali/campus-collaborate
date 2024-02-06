import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Toolbar, InputBase, Divider, Typography } from "@mui/material";
import Theme from "./themes";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function UpBar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "white",
        position: "relative",
        height: "80px",
        display: "flex",
        flexDirection: "row",
        //   justifyContent: "flex-end",
      }}
    >
      <Toolbar
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            color: "black",
            display: { xs: "none", sm: "block", flexGrow: 1 },
          }}
        >
          Create a Post
        </Typography>
        <Divider
          orientation="vertical"
          flexItem
          variant="middle"
          sx={{ flexGrow: 1 }}
        />
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "black" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}
