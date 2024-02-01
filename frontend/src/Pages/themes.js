import { createTheme } from "@mui/material";

const Theme = createTheme({
  typography: {
    fontFamily: ['"Segoe UI"', "sans-serif"].join(","),
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: "800",
          "&:hover": {
            borderBottom: "2px solid black",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "600px",
          padding: "10px",

          "& .MuiInputBase-root": {
            height: 70,
            borderRadius: "100px",
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        "& .MuiCardMedia-img": {
          "&:hover": {
            opacity: "0.4",
            cursor: "pointer",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        ".intext": {
          backgroundColor: "red",
          cursor: "pointer",
          // display: "none",
        },
      },
    },
  },
});

export default Theme;
